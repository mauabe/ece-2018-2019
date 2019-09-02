import React, {Component} from 'react';
import{withRouter, Route, Redirect} from 'react-router-dom';

import Bubbles from '../components/Bubbles';
import Article from '../components/Article';
import {articlesFaculty} from '../assets/articlesFaculty.js';

class Faculty extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'faculty',
      articles: articlesFaculty,
      articleSelected: articlesFaculty[0].articleId,
    }

    //TODO: SETUP NEW ROUTER HERE FOR ARTICLES:

    //articleId === -> url snippet for each article. === articleSelected after it is selected
    //compare the state of articleSelected to articleId, defaults to first article at constructor
		// console.log('%c PROPS at FACULtY constructor', 'color:black;background:orange;padding:6px;border:1px dashed black', this.props)
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

    if(components[2] === undefined){this.setState({articleSelected: articlesFaculty[0].articleId}, () =>{console.log('updating state inside ComponentDidMount...')})}

    console.log('%c PROPS at FACULTY ', 'color:black;background:orange;padding:10px;border:1px solid black', 'articleId:' , articlesFaculty[0].articleId)

    console.log('%c PROPS at FACULTY ', 'color:black;background:orange;padding:10px;border:1px solid black', 'HC: components[2]:', components[2], 'HC: components:', components)

    console.log('%c PROPS at FACULTY ', 'color:black;background:orange;padding:10px;border:1px solid black','state.articleSelected:', this.state.articleSelected)
  }

  handlePageViewChange = e =>
  {
    // Update the selected subviewMode. This should only be utilized in mobile view.
    const newPageView = e.target.value;
    const firstArticle = `articles${newPageView}[0].articleId`;
    this.setState({pageView: newPageView})
    this.props.history.push(`/${newPageView}/${firstArticle}`)
  }

  // renderArticles = () => {
  //   const
  // }

  handleArticleClick(e){
    this.setState({articleSelected: e.target.value});
  }


  render() {
    // console.log('this.state.articleSelected', this.state.articleSelected)
    return (
      <div className="content-area">
        <div className="bubbles">
          <Bubbles
            pageView={this.state.pageView}
            articleSelected={this.state.articleSelected}
            articles={articlesFaculty}
            onClick={this.handleArticleClick}
          />
        </div>
        <div className="article">
          <Article
            pageView={this.state.pageView}
            articleSelected={this.state.articleSelected}
            articleId={articlesFaculty.articleId}
            articles={articlesFaculty}
          />
        </div>

      </div>
    )
  }
}

export default withRouter(Faculty);
