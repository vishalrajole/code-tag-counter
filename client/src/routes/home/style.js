import styled from 'styled-components';

export const Tags = styled.ul`
    padding: 0 15px;
    width: 30%;
    list-style: none;     
`;

export const Tag = styled.li`
    background-color: #4381C1;
    border: 1px solid #4381C1;
    color: #fff;
    margin: 5px;
    padding: 5px 10px;
    float: left;
    cursor: pointer;
    &.active {
        background-color: #3b5d81;
        border-color: #3b5d81
    }
`;

export const Input = styled.input`
    border: 1px solid #236776;
    padding: 5px 15px;
    height: 20px;
    font-size: 1rem;
    width: 50%;
    float: left;
`;

export const Button = styled.button`
    border: 1px solid #4381C1;
    color: #fff;
    background-color: #4381C1;
    height: 32px;
    padding: 0px 15px;
    font-size: 1.1rem;
    
    &:disabled {
        background-color: #B5B9B9;
        border: 1px solid #B5B9B9;
    }
`;
export const Code = styled.blockquote`
    position: relative;
    width: 65%;
    height: calc(100vh - 130px);
    margin: 0px;
    border: 1px solid #236776;
    overflow-y: auto;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    margin-bottom: 10px;
    padding: 5px;
    background-color: #eee;
`;

export const Loader = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    width: 100%;
    height: 100%;
`;

export const ErrorText = styled.small`
    display: block;
    color: red;
`;

export const CodeWrapper = styled.div`
    display: flex
`;
