import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';

import Bubbles from '../components/Bubbles';
import Article from '../components/Article';
import {articlesAlumni} from '../assets/articlesAlumni.js';
// import history from '../history';

// import aiello3 from '../assets/images/aiello03.png';
// import aiello1 from '../assets/images/aiello01.png';
// import aiello2 from '../assets/images/aiello02.png';
// import aiello2 from './img/santos.jpg';






class Alumni extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'alumni',
      articleSelected: articlesAlumni[0].articleId,
    }

    //articleView -> url snippet for each article. articleId uses the same string value as articleView. Compare the state of articleSelected to articleId/articleView, defaults to first article at constructor

		console.log('%c PROPS at ALUMNI constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)

  }

  componentDidMount(){
    //default to first article in artticle list for the pageView
    if(!this.state.articleSelected && !this.props.articleView) {
      this.setState({articleSelected: articlesAlumni[0].articleId});
    }
    const components = this.props.history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
    if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
    if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
    if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
    if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
    if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}
    console.log('components[5]', components[5], components)

    // if(this.state.articleSelected !== components[5]){
    //   this.renderArticle(this.state.articleSelected);
    // }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({articleSelected: e.target.value});
  }


  render() {
    return (
      <div className="content-area">

        <div className="bubbles-submenu">
          <Bubbles
            pageView={this.state.pageView}
            articleSelected={this.state.articleSelected}
            articles={articlesAlumni}
            onClick={this.handleCLick}


            
          />
        </div>
        <div className="article">
          <Article
            pageView={this.state.pageView}
            articleSelected={this.state.articleSelected}
            articles={articlesAlumni}
          />
        </div>

      </div>
    )
  }
}

export default withRouter(Alumni);
