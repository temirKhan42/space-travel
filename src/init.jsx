import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../styles/main.scss';

export default () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
