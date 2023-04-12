import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
}

*::-webkit-scrollbar {
    display: none;
}

html {
    background-color: #232323;
}

`;

export { GlobalStyles }