import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";

import Features from './Features';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import history from '../history';

class ContentArea extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pageView: 'features',
    }
    console.log('%c PROPS at CONTENT AREA constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)

  }

  componentDidMount(){
    //default to first article in artticle list for the pageView

    const components = this.props.history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
    if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
    if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
    if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
    if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
    if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}

    // if(this.state.articleSelected !== components[5]){
    //   this.renderArticle(this.state.articleSelected);
    // }
  }

  // renderComponent = () => {
  //   const {pageView} = this.state;
  //   if(!pageView)return;
  // }



  render() {
    return (
      <div className="content-area">

      </div>
    )
  }
}

export default withRouter(ContentArea);
