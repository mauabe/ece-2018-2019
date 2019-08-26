import React, {Component} from 'react';
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
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
import * as data from '../assets/data'


class App extends Component {
  constructor(props) {
		super(props);
	  this.state = {
      menuExpanded: false,
      submenuExpanded: false,
    }
  // console.log('%c PROPS at APP CONSTRUCTOR', 'color:white;background:black;padding:6px;border:3px dashed yellow', this.props)
  }
  renderPlaceholder = () => {
    return (<div>
      <div style={{ "padding": "50px", "textAlign": "center" }}>
        THIS FEATURE IS NOT YET AVAILABLE
      </div>
    </div>);
  }



  


  render(){
    return (
      <div className="App">
        <Router history = {history}>
          <div>
            <Header/>
            <Switch>
              <Route path='/features' component={Features}/>
              <Route path='/highlights' component={Highlights}/>
              <Route path='/students' component={Students}/>
              <Route path='/faculty' component={Faculty}/>
              <Route path='/overview' component={Overview}/>
              <Route path='/alumni' component={Alumni}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
