import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
// import MenuBoxLarge from './MenuBoxLarge';
import { withRouter } from "react-router-dom";

import * as data from '../assets/data'

class Home extends Component{
  constructor(props) {
		super(props);
	  this.state = {
			pageView: ''
		}
		// console.log('%c data.topmenu at MENUBAR constructor', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', data.topMenu);
		console.log('%c PROPS at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.props);
		console.log('%c STATE at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.state);
  }

  renderPlaceholder = () => {
    return (<div>
      <div style={{ "padding": "100px", "textAlign": "center" }}>
        <h3>THIS FEATURE IS NOT YET AVAILABLE</h3>
      </div>
    </div>);
  }

  render() {
    return (
      <div className="home-container">

          Dude, this is home!
          {this.renderPlaceholder()}

      </div>
    );
  }
}

export default withRouter(Home);
