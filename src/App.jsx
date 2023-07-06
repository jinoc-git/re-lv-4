import { createGlobalStyle } from 'styled-components';
import Router from './shared/Router';
import reset from 'styled-reset';

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
`;
