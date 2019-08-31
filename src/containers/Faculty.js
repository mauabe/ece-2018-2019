
import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";
import '../scss/styles.scss';

import Header from './Header';
import Features from './Features';
import Bubbles from '../components/Bubbles';
import ContentArea from '../components/ContentArea';
import history from '../history';


class Faculty extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'features'
    }
    console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props);

    // this.routes =
    // [
    //   { path: '/companies', render: this.renderCompanies.bind(this), exact: true },
    //   { path: '/players', render: this.renderPlayers.bind(this), exact: true },
    //   { path: '/brandvalues', render: this.renderBrandValues.bind(this), exact: true },
    //   { path: '/playervalues', render: this.renderPlayerValues.bind(this), exact: true },
    //   { path: '/equipment', render: this.renderEquipment.bind(this), exact: true },
    //   { path: '/performance', render: this.renderPerformance.bind(this), exact: true },
    // ];
  }

  // componentDidMount(){
  //   let uclaece = './src/assets/UCLA_ECE_white.svg';
  //   let ece = './src/assets/ECE_white.svg';

  //   const components = history.location.pathname.split('/');
  //   if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
  //   if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
  //   if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
  //   if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
  //   if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
  //   if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}

  //   if(this.setState.pageView === "features"){
  //     this.setState.logoPick = uclaece;
  //   } else this.setState.logoPick = ece;
  // }


  render() {
    return (
      <div className="bubbles">
        <div className="bubbbles section">
          <div className="bubble-circle"></div>
            <ContentArea />
            <Bubbles />
          <h4>this.props.headlineShort</h4>

        </div>
      </div>
    );
  }
}

export default Faculty;
