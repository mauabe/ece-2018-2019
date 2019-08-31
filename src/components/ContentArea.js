import React, {Component} from 'react';
import{withRouter, Switch } from 'react-router-dom';

import Bubbles from './Bubbles';
import Content from './ContentArea';
import Footer from './Footer';
import history from '../history';

class ContentArea extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature'
    }
		console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	   this.routes =
    [
      { path: '/features', render: this.renderFeatures.bind(this), exact: true },
      { path: '/highlights', render: this.renderHighlights.bind(this), exact: true },
      { path: '/students', render: this.renderStudents.bind(this), exact: true },
      { path: '/faculty', render: this.renderFaculty.bind(this), exact: true },
      { path: '/overview', render: this.renderOverview.bind(this), exact: true },
      { path: '/alumni', render: this.renderAlumni.bind(this), exact: true },
    ];
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


  renderFeatures =() => {
    <div className="article-container">
      <Bubbles />
      <Features />
    </div>
  }

  renderHighlights =() => {
    <div className="article-container">
      <Bubbles />
      <Highlights />
    </div>
  }

  renderStudents =() => {
    <div className="article-container">
      <Bubbles />
      <Students />
    </div>
  }

  renderFaculty  =() => {
    <div className="article-container">
      <Bubbles />
      <Faculty />
    </div>
  }

  renderOverview =() => {
    <div className="article-container">
      <Bubbles />
      <Overview />
    </div>
  }

  renderAlumni =() => {
    <div className="article-container">
      <Bubbles />
      <Alumni />
    </div>
}





  render() {
    return (
      <div className="content-area">
        <div>
THIS IS CONTENT AREA RENDER: {this.props.match}

        </div>
      </div>
    )
  }
}



{/* <Switch>{(this.props.match, this.routes)}</Switch> */}

// export default withRouter(ContentArea);
export default withRouter(ContentArea);
