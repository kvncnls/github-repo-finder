
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
  * {
margin: 0;
padding: 0;
}

 `
export default GlobalStyle;