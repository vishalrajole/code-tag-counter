import styled from 'styled-components';
import { PRIMARY_BG, PRIMARY_BORDER, PRIMARY_BG_ACTIVE, PRIMARY_BORDER_ACTIVE, PRIMARY_COLOR, PRIMARY_BORDER_DISABLED, PRIMARY_BG_DISABLED, LIGHT_BG, ERROR_TEXT } from '../../styles/variables';

export const Tags = styled.ul`
    padding: 0 15px;
    width: 30%;
    list-style: none;     
`;

export const Tag = styled.li`
    background-color: ${PRIMARY_BG};
    border: 1px solid ${PRIMARY_BORDER};
    color: ${PRIMARY_COLOR};
    margin: 5px;
    padding: 5px 10px;
    float: left;
    cursor: pointer;
    &.active {
        background-color: ${PRIMARY_BG_ACTIVE};
        border-color: ${PRIMARY_BORDER_ACTIVE};
    }
`;

export const Input = styled.input`
    border: 1px solid ${PRIMARY_BORDER};
    padding: 5px 15px;
    height: 20px;
    font-size: 1rem;
    width: 50%;
    float: left;
`;

export const Button = styled.button`
    background-color: ${PRIMARY_BG};
    border: 1px solid ${PRIMARY_BORDER};
    color: ${PRIMARY_COLOR};
    height: 32px;
    padding: 0px 15px;
    font-size: 1.1rem;
    
    &:disabled {
        background-color: ${PRIMARY_BG_DISABLED};
        border: 1px solid ${PRIMARY_BORDER_DISABLED};
    }
`;
export const Code = styled.blockquote`
    position: relative;
    width: 65%;
    height: calc(100vh - 130px);
    margin: 0px 0px 10px 0px;
    border: 1px solid ${PRIMARY_BORDER};
    overflow-y: auto;
    padding: 5px;
    background-color: ${LIGHT_BG};
`;

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`;

export const ErrorText = styled.small`
    display: block;
    color: ${ERROR_TEXT};
`;

export const CodeWrapper = styled.div`
    display: flex
`;
