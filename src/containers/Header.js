import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Menubar from '../components/Menubar';
import Logos from '../components/Logos';
import history from '../history';

import ece from '../assets/images/ECE_white.svg';
import uclaece from '../assets/images/ECE.svg';
// import pixel from '../assets/images/pixel.png';


class Header extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: '',
      logoPick: ece,
    }
		// console.log('%c PROPS at HEADER constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  componentDidMount(){
    const components = this.props.location.pathname.split('/');
    if (components.indexOf('features') !== -1) this.setState ({pageView: 'features'});
    if (components.indexOf('highlights') !== -1) this.setState ({pageView: 'highlights'});
    if (components.indexOf('students') !== -1) this.setState ({pageView: 'students'});
    if (components.indexOf('faculty') !== -1) this.setState ({pageView: 'faculty'});
    if (components.indexOf('overview') !== -1) this.setState ({pageView: 'overview'});
    if (components.indexOf('alumni') !== -1) this.setState ({pageView: 'alumni'});

    if(this.state.pageView === ""){
      this.setState({logoPick: uclaece});
    } else {
      this.setState({logoPick: ece});
    }

  }

  render() {


    return (

      <div className="header">
        <Logos
          logoPick={this.state.logoPick}
          />
        <Menubar
          pageView={this.state.pageView}
        />
      </div>
    );
  }
}
export default withRouter(Header);
