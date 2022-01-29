import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import '../styles/main.scss';

export default () => {
  const rootElem = document.getElementById('root');

  ReactDOM.render(
    <App />,
    rootElem,
  );
};
