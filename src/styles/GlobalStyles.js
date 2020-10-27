// removed overflow hidden has it was causing a bug potentially. No clue why it was there in the first place. 
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

a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
 `
export default GlobalStyle;