import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import '../scss/styles.css';
import history from '../history';

import Header from './Header';
import Features from './Features';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import Footer from '../components/Footer';
import ContentArea from '../components/ContentArea';
import { createBrowserHistory } from 'history';

// export createBrowserHistory();

const App = () => {

  const renderPlaceholder = () => {
    return (<div>
      <div style={{ "padding": "50px", "textAlign": "center" }}>
        THIS FEATURE IS NOT YET AVAILABLE
      </div>
    </div>);
	}

  return (
    <div className="App">
      <Router history = {history}>
        <div>
          <Header/>
          <Switch>
            <Route path='/features' exact component={Features}/>
            <Route path='/highlights' exact component={Highlights}/>
            <Route path='/students' exact component={Students}/>
            <Route path='/faculty' exact component={Faculty}/>
            <Route path='/overview' exact component={Overview}/>
            <Route path='/alumni' exact component={Alumni}/>
          </Switch>
        <Footer/>
        </div>
      </Router>
    </div>
);

}

export default App;
