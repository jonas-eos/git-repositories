import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

/**
 * Main app function
 * @return {html}
 */
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
