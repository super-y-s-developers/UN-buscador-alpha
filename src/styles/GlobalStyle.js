import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`${(props) => `
  // ---------- GENERAL ----------- //

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${props.theme.secondary};
    background-color: ${props.theme.background};
    font-family: ${props.theme.base_font_family};
    font-size: ${props.theme.base_font_size};
    font-weight: 400;
    line-height: ${props.theme.base_font_lineheight};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  // ---------- TITLES ----------- //

  h1, h2, h3, h4, h5, b {
    font-family: ${props.theme.titles_font_family};
    color: ${props.theme.title_color};
    font-weight: bold;
  }

  // ---------- LINKS ----------- //

  a {
    color: ${props.theme.title_color};
    font-weight: 500;
  }

  // ---------- FONTS ----------- //

  // Nunito for the titles
  @font-face {
    font-family: Nunito;
    src: local(Nunito-Light),
      url(/fonts/Nunito-Light.ttf) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Nunito;
    src: local(Nunito-Regular),
      url(/fonts/Nunito-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Nunito;
    src: local(Nunito-SemiBold),
      url(/fonts/Nunito-SemiBold.ttf) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Nunito;
    src: local(Nunito-Bold),
      url(/fonts/Nunito-Bold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  // NunitoSansSans for the texts
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Light),
      url(/fonts/NunitoSans-Light.ttf) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Regular),
      url(/fonts/NunitoSans-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-SemiBold),
      url(/fonts/NunitoSans-SemiBold.ttf) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: NunitoSans;
    src: local(NunitoSans-Bold),
      url(/fonts/NunitoSans-Bold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  // MaterialIcons for the Icons
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/MaterialIcons-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
`}`;

export default GlobalStyle;
