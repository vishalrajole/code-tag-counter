import React, { Component } from 'react';
import axios from 'axios';
import { Tags, Tag, Input, Button, Code, CodeWrapper, Loader, ErrorText } from './style';
import Highlighter from "react-highlight-words";
import { stat } from 'fs';

class Home extends Component {
    initialState = { url: '', htmlData: '', counts: {}, isLoading: false, isUrlValid: false, errorText: '', selectedTags: [] };
    state = this.initialState;
    myRef = React.createRef();

    getData = () => {
        const isUrlValid = this.validateUrl(this.state.url);
        if (isUrlValid) {
            this.setState({ isLoading: true, counts: {}, htmlData: null });
            const url = `/fetch-source-code?url=${this.state.url}`;
            axios.get(url).then((res) => {
                if (res.data.length) {
                    var tempData = res.data;
                    var counts = this.getTagsWithCount(tempData);
                    this.setState({ htmlData: tempData, counts, isLoading: false, errorText: '' });
                }
            }).catch((error) => {
                this.setState({ isLoading: false });
                console.log(`inside axios get error ${error}`);
                if (error.response.status === 500) {
                    const errorText = error.response.data.error || 'Something went wrong. Please try again later'
                    this.setState({ errorText })
                }
                //Set some error message on failure: Test by throwing error from backend
            })
        }
    }

    getTagsWithCount = (data) => {
        var parser = new DOMParser();
        let dom = parser.parseFromString(data, 'text/html');
        let tags = dom.getElementsByTagName("*");
        let tagCount = {};
        for (let i = 0; i < tags.length; i++) {
            if (tagCount[tags[i].tagName]) {
                tagCount[tags[i].tagName]++;
            } else {
                tagCount[tags[i].tagName] = 1;
            }
        }
        return tagCount;
    }

    handleChange = (event) => {
        const isUrlValid = this.validateUrl(event.target.value);
        this.setState({ url: event.target.value, isUrlValid })
    }

    validateUrl = (url) => {
        const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return regex.test(url);
    }

    selectTag = (value) => (event) => {
        this.setState(state => {
            const selectedTags = [value];
            return { selectedTags }
        }, () => {
            console.log(this.state);
        });
    }
    renderTags = () => {
        return Object.keys(this.state.counts).map((val, index) => {
            return (<Tag key={index} className={this.state.selectedTags[0] == val && 'active'} onClick={this.selectTag(val, index)}>{val.toLowerCase()} - {this.state.counts[val]}</Tag>);
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Input type="text" value={this.state.url} onChange={this.handleChange} placeholder='Enter website url i.e https://tact.ai/'></Input>
                    <Button type="submit" disabled={!this.state.isUrlValid} onClick={this.getData}>Get data</Button>
                    {(!this.state.isUrlValid && this.state.url.length > 0) && <ErrorText>Entered web url is not valid</ErrorText>}
                </div>
                <h3>Source Code</h3>
                <CodeWrapper>
                    <Code>

                        <pre>
                            <code ref={this.myRef}>
                                {this.state.htmlData && <Highlighter
                                    highlightClassName="mark"
                                    searchWords={this.state.selectedTags}
                                    autoEscape={true}
                                    textToHighlight={this.state.htmlData}
                                />}
                            </code>
                        </pre>
                        {this.state.errorText && !this.state.isLoading && <Loader><ErrorText>{this.state.errorText}</ErrorText></Loader>}
                        {this.state.isLoading && <Loader>Loading ...</Loader>}
                    </Code>
                    <Tags>{this.renderTags()}</Tags>
                </CodeWrapper>
            </React.Fragment >
        );
    }
}

export default Home;