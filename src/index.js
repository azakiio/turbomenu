import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './style.scss';

function App() {
  return (
    <React.Fragment>
      <Header restaurant="Fawzi's Restaurant" link="https://fawziammache.com"></Header>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
