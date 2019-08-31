import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";

import Header from './Header';
import Bubbles from '../components/Bubbles';
import history from '../history';


class Overview extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'features'
    }
    console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props);
  }

  // componentDidMount(){
    // let uclaece = './src/assets/UCLA_ECE_white.svg';
    // let ece = './src/assets/ECE_white.svg';

    // const components = history.location.pathname.split('/');
    // if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
    // if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
    // if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
    // if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
    // if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
    // if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}

    // if(this.setState.pageView === "features"){
    //   this.setState.logoPick = uclaece;
    // } else this.setState.logoPick = ece;
  // }


  render() {
    return (
      <div className="bubbles">
        <div className="bubbbles section">
          <div className="bubble-circle"></div>

            <Bubbles
            />
          <h4>this.props.headlineShort</h4>

        </div>
      </div>
    );
  }
}
export default Overview;
