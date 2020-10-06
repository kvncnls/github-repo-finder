
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color:#f1f7fa;
 

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

a { text-decoration: none;  }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:focus { text-decoration: none; }
a:hover, a:active { text-decoration: none; }
 `
export default GlobalStyle;