import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'whatwg-fetch';
import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import 'styles/style';

// layouts
import Main from 'javascripts/layouts/main';

function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}

const rootElement = document.getElementById('main');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./layouts/main', () => {
    render();
  });
}
