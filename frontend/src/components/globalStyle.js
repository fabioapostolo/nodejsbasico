import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        color: #b8860b;
        border: 2px solid #ffffff;
        transition: all 0.5s ease;
        &:hover{
            background-color: #b8860b;
            color: white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 2rem;
        color:#b8860b;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 1.2rem;
        color: lightgrey;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;  
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.2rem;
        line-height: 150%
    }


`;

export default GlobalStyle;