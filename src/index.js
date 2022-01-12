import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/content/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import i18n from './i18n';

import './index.scss';
const history = createBrowserHistory()

ReactDOM.hydrate(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ... </div>}>
      <Router history={history}>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
