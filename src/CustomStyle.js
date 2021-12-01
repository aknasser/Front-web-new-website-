import { createGlobalStyle } from "styled-components";

const CustomStyle = createGlobalStyle`

    form {
        display: flex;
        flex-direction: column;
        background-color: red;
    }
    div {
        background-color: ${props => props.bgColor};
    }
    button, input[type=submit] {
        background : rgba(225, 44, 75, 1);
        border : 0rem;
        border-radius : 0.5rem;
        -moz-border-radius : 0.5rem;
        -webkit-border-radius : 0.5rem;
        font-family : Segoe UI;
        font-weight : bold;
        font-size : 2rem;
        text-transform : uppercase;
        color : rgb(255, 255, 255);
        cursor : pointer;
    }
    button:hover {
        background-color : rgba(34, 56, 89, 1);
    }
    `

// REM for the font-size, margin and padding | EM for the component that need to ,  | PX for root level element (HTML)
 
export default CustomStyle;