import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Multilanguage
import 'other/translations/i18n';

ReactGA.initialize('UA-100556059-1');

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
