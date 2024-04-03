import { createGlobalStyle } from 'styled-components';
import { PrimaryColor } from './styleConstants';

const Globals = createGlobalStyle`
  :root {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${PrimaryColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  margin: inherit;
  padding: inherit;
  font-family: inherit;
  color: inherit;
}
`;

export default Globals;
