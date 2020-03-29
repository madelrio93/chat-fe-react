import  styled from 'styled-components';
import { mediaBreakpointUp } from 'react-grid';



export const Aside = styled.div`
    background: #242526;
    font-family: 'Roboto', sans-serif;
    color:#fff;
    padding:10px;
    height:100%;
    border-right: solid 1px rgba(255, 255, 255, 0.1);
    ${props => props.primary && css`
        background: white;
        color: palevioletred;
    `}
`


