import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        border: none;
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    }

    body {
        box-sizing: border-box;
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 0px;
        }
    }
    div{
        box-sizing: border-box;
        font-family: "NotoSansCJKkr";
    }
    ul {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    h1{ 
        font-size:64px;
        font-family: "NotoSansCJKkr";
       }
    h2{
        font-size:48px;
        font-family: "NotoSansCJKkr";
    }
    h3{
        font-size:36px;
        font-family: "NotoSansCJKkr";
    }
    h4{
        font-size:24px;
        font-family: "NotoSansCJKkr";
    }
    h5{
        font-size:18px;
        font-family: "NotoSansCJKkr";
    }
    h6{
        font-size:16px;
        font-family: "NotoSansCJKkr";
    }

    @font-face {
        font-family: "NotoSansCJKkr";
        src: url('/fonts/NotoSansKR-Regular.woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;
