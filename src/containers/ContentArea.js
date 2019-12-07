import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";



//THIS FILE IS NOT BEING USED






import Features from './Features';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import history from '../history';

import Bubbles from '../components/Bubbles';
import Article from '../components/Article';
import {articlesFeatures} from '../assets/articlesFaculty.js';

class ContentArea extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pageView: 'features',
      articles: articlesFeatures,
      articleSelection: articlesFeatures[0].articleId,
    }
    // console.log('%c PROPS at CONTENT AREA constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  componentDidMount(){
    //find from location if there is a article loded, if not use first article,
    const components = this.props.history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'};
    if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'};
    if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'};
    if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'};
    if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'};
    if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'};

     if(components[2] === undefined){this.setState({articleSelection: articlesFaculty[0].articleId}, () =>{console.log('updating state inside ComponentDidMount...')})}
  }

  handlePageViewChange = e =>
  {
    // Update the selected subviewMode. This should only be utilized in mobile view.
    const newPageView = e.target.value;
    const firstArticle = `articles${newPageView}[0].articleId`;
    this.setState({pageView: newPageView})
    this.props.history.push(`/${newPageView}/${firstArticle}`)
  }

  render() {
    return (
      <div className="content-area">
      </div>
    )
  }
}

export default withRouter(ContentArea);
