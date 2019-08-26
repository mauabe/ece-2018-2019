import React, {Component} from 'react';

import Menubar from '../components/Menubar';
import Logos from '../components/Logos';
import { withRouter, Redirect, Route } from "react-router-dom";


class Header extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature'
    }

		console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	}

	componentDidMount() {
		const props = this.props;
  }

  // renderRouteWithMatch(match, opts){
  //   const {path, ...rest} = opts;
  //   return(
  //     <Route path={match.url + path} {...rest}/>
  //   )
  // }

  // renderRoutes(match, optsArr){
  //   return optsArr.map((opts, idx) => renderRouteWithMatch(match, {key: idx, ...opts}))
  // }


  render() {
    return (
      <div className="App">
        <Logos></Logos>
        <Menubar></Menubar>

      </div>
    );
  }
}

export default Header;
