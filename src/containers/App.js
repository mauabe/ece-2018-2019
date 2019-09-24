import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import '../scss/styles.scss';
// import history from '../history';

import Header from './Header';
import Features from './Features';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import Footer from '../components/Footer';
// import ContentArea from './ContentArea';


class App extends Component {
  constructor(props) {
		super(props);
	  this.state = {
    }
  // console.log('%c PROPS at APP CONSTRUCTOR', 'color:white;background:black;padding:6px;border:3px dashed yellow', this.props)
  }
  renderPlaceholder = () => {
    return (<div>
      <div style={{ "padding": "50px", "textAlign": "center" }}>
        <h3>THIS FEATURE IS NOT YET AVAILABLE</h3>
      </div>
    </div>);
  }




  render(){
    return (
      <div className="App">
        {/* <Router history = {history}> */}
        <BrowserRouter basename="/calendar" />
          <Header/>
          {/* <div className="content-area"> */}
            <Switch>
              <Route path='/features' component={Features}/>
              <Route path='/highlights' component={Highlights}/>
              <Route path='/students' component={Students}/>
              <Route path='/faculty' component={Faculty}/>
              <Route path='/overview' component={Overview}/>
              <Route path='/alumni' component={Alumni}/>
              <Route path='/features' render={() => <Redirect to="/highlights/pottie" />} />,
              <Route path='/highlights' render={() => <Redirect to="/highlights/ieeefellows" />} />,
              <Route path='/students' render={() => <Redirect to="/students/awards"  />}/>,
              <Route path='/faculty' render={() => <Redirect to="/faculty/ces" />}/>,
              <Route path='/overview' render={() => <Redirect to="/overview/researchcenters" />}/>,
              <Route path='/alumni' render={() => <Redirect to="/alumni/alumni"  />}/>,
            </Switch>
          {/* </ContentArea> */}
          <Footer/>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
