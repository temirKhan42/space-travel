import getStatus from './App.jsx';

export default () => {
  const point = document.getElementById('point');
  const appInitState = getStatus('success');
  const mode = process.env.NODE_ENV;
  point.innerHTML = `${appInitState} from ${mode}`;
};
