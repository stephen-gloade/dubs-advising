import { createGlobalStyle } from "styled-components";

//
//  GlobalStyles, oh how I should've added so much more.... Atleast I know for the future!
//

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