import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{'Jae Ho Choi'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Jae Ho Choi'} />
      </Helmet>
        <App />
    

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
