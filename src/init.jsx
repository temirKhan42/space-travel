import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import dataContext from './context/index.js';
import data from './static/data.json';

import '../styles/main.scss';

export default () => {
  const rootElem = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <dataContext.Provider value={data}>
        <App />
      </dataContext.Provider>
    </Provider>,
    rootElem,
  );
};
