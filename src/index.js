import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/styles.css';
import App from './containers/App';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router';
import {createBrowserHistory} from "history";

const history = createBrowserHistory({basename: '/2018-2019/'});

ReactDOM.render(
  <Router history={history} >
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();




//https://www.npmjs.com/package/react-snapshot
//add React Snapshot to deploymt
// First, npm i -D react-snapshot
// Second, open your package.json and change "scripts" from
// - "build": "react-scripts build"
// + "build": "react-scripts build && react-snapshot"

// Third, change your usage of react-dom:
// - import ReactDOM from 'react-dom';
// + import { render } from 'react-snapshot';

// - ReactDOM.render(
// + render(
//     <App/>,
//     document.getElementById('root')
//   );

//issues at; https://github.com/geelen/react-snapshot/issues/42
// .option('--build-dir <directory>', `Specify where the JS app lives. Defaults to 'build'`)
// .option('--domain <domain>', `The local domain to use for scraping. Defaults to 'localhost'`)
// .option('--output-dir <directory>', `Where to write the snapshots. Defaults to in-place (i.e. same as build-dir)`)
// using command line interface, you can easily specify the build directory
// react-snapshot --build-dir path/to/build_dir