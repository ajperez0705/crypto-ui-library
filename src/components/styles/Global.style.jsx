import { createGlobalStyle } from "styled-components";
import monumentExtendedBlack from "../../fonts/MonumentExtended-Black.ttf";
import monumentExtendedReg from "../../fonts/MonumentExtended-Regular.ttf";

const GlobalStyles = createGlobalStyle`
    /* Fonts */
    @font-face {
  font-family: "monumentExtended_Black";
  src: url(${monumentExtendedBlack}) format('truetype'); 
}
@font-face {
  font-family: "monumentExtended_Regular";
  src: url(${monumentExtendedReg}) format('truetype'); 
}

/* Work Sans Google Import */
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

/* Roboto Mono */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: #FAFCFE;
    }

    /* Colors */
    :root {
        /* Brand Colors */
        --primaryBrand: #2F3E46
        --secondaryBrand: #F2F475
        --tertiaryBrand: #87B095
        --accent_limeGreen: #75F4A0
    }

        
        body {
            background-color: var(--lightBody);
        }
        
        h1 {
            font-family: monumentExtended_Black;
            /* color: ; */
        }

        h2, h3 {
            font-family: monumentExtended_Regular;
            /* color: ; */
        }

        /* Subtitle */
        h4 {
            font-family: 'Work Sans', sans-serif;
        }

        /* Pretitle */
        h5 {
            font-family: Work Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
        }

        p {
            font-family: 'Roboto Mono', monospace; 
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
        }

        button {
            font-family: monumentExtended_Black;
        }

        

        a {
            font-family: 'Roboto Mono', monospace; 
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
            text-decoration-line: underline;
        }
      
`;

export default GlobalStyles;
