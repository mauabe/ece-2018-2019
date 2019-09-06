import React, {Component} from 'react';
import { withRouter} from "react-router-dom";

import Bubbles from '../components/Bubbles';
import Article from '../components/Article';
import {articlesHighlights} from '../assets/articlesHighlights.js';

class Highlights extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'faculty',
      articleSelection: articlesHighlights[0].articleId,
    }
    console.log('%c PROPS at Highlights constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  componentDidMount(){
    //default to first article in artticle list for the pageView
    if(!this.state.articleSelection && !this.props.articleView) {
      this.setState({articleSelection: articlesHighlights[0].articleId});
    }

    const components = this.props.history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
    if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
    if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
    if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
    if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
    if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}
    console.log('components[5]', components[5], components)

    // if(this.state.articleSelection !== components[5]){
    //   this.renderArticle(this.state.articleSelection);
    // }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({articleSelection: e.target.value});
  }

  // find article to render
//???????
  // renderArticle = (articleSelection) => {
  //  if(this.state.articleSelection !== this.props.articleView){
  //     this.setState({articleView: articleSelection});
  //  };
  // }



  render() {
    return (
      <div className="content-area">

        <div className="bubbles-submenu">
          <Bubbles
            pageView={this.state.pageView}
            articleSelection={this.state.articleSelection}
            articles={articlesHighlights}
            onClick={this.handleCLick}
          />
        </div>
        <div className="article">
          <Article
            pageView={this.state.pageView}
            articleSelection={this.state.articleSelection}
          />
        </div>
      </div>
    )
  }
}

// export default withRouter(ContentArea);
export default withRouter(Highlights);
