import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import MenuBoxLarge from './MenuBoxLarge';
import { withRouter } from "react-router-dom";

// import * as data from '../assets/data'
import eceblue from '../assets/images/ECE_logo_blue.svg';
import ecewhite from '../assets/images/ECE_logo_white.svg';

class Home extends Component{
  constructor(props) {
		super(props);
	  this.state = {
			counter: ''
		}
		// console.log('%c PROPS at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.props);
		// console.log('%c STATE at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.state);
  }

  renderPlaceholder = () => {
    return (<div>
      <div className="placeholder" >
        <h3><Link to="/features/pottie" > Electrical and Computer Engineering </Link></h3>
      </div>
    </div>);
  // {this.renderPlaceholder()}
  }

  render() {
    return (
      <div className="home-container">
        <Link to="/features/pottie" >
        <div className="logo-container">
          <img className="frontpagelogoblue" src={eceblue} alt="ECE logo blue"/>
          <img className="frontpagelogowhite" src={ecewhite} alt="ECE Logo white"/>
        </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(Home);
