import React, {Component} from 'react';
import { withRouter, Redirect, Route } from "react-router-dom";

import Menubar from '../components/Menubar';
import Logos from '../components/Logos';
import history from '../history';

import * as data from '../assets/data'
import uclaece from '../assets/UCLA_ECE_white.svg';
import ece from '../assets/ECE_white.svg';



class Header extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature',
      logoPick: './src/assets/UCLA_ECE_white.svg'
    }
		console.log('%c PROPS at HEADER constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	}

  componentDidMount(){
    let uclaece = './src/assets/UCLA_ECE_white.svg';
    let ece = './src/assets/ECE_white.svg';

    const components = history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
    if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
    if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
    if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
    if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
    if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}

    if(this.setState.pageView === "features"){
      this.setState.logoPick = uclaece;
    } else this.setState.logoPick = ece;
  }


  render() {
    console.log('%c PROPS at HEADER render', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
    return (
      <div className="header">
        <Logos
          pageView={this.state.pageView}
          logoPick={this.state.logoPick}
        />
        <Menubar/>

      </div>
    );
  }
}
export default withRouter(Header);
