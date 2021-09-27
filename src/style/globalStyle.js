import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        font-size : 62.5%;

        * {
            margin : 0;
            padding : 0;
            box-sizing : border-box;
        }

        body {
            font-family: 'Lato', sans-serif;

            h1 {
                font-size: 6rem;
            }

            h2 {
                font-size: 3.6rem;
            }

            h3 {
                font-size: 2.2rem;
            }

            h4 {
                font-size: 1.8rem;
            }

            p {
                font-size : 1.4rem;
            }

        }
    }

`;
