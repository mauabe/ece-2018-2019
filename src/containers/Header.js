import React, {Component} from 'react';
import { withRouter, Redirect, Route } from "react-router-dom";

import Menubar from '../components/Menubar';
import Logos from '../components/Logos';
import * as data from '../assets/data'


class Header extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature'
    }
		// console.log('%c PROPS at HEADER constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	}

	componentDidMount() {
    const props = this.props;
    // const routes = data.topMenu.map((value) => {
    //   { path: `/${value[0]}`, name: value[1], Component: `${value[0]}.charAt(0).toUpperCase()${value[0]}substr(1).toLowerCase()` }
    // });
  }


  render() {
    // console.log('%c PROPS at HEADER render', 'color:black;background:magenta;padding:6px;border:1px dashed black', routes)
    return (
      <div className="header">
        <Logos/>
        <Menubar/>

      </div>
    );
  }
}
export default withRouter(Header);
