import React, {Component} from 'react';
import{withRouter, Route, Redirect} from 'react-router-dom';

import Bubbles from '../components/Bubbles';
import {articlesOverview} from '../assets/articlesOverview.js';
import * as data from '../assets/data'

class Overview extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'overview',
      articles: articlesOverview,
      articleSelected: articlesOverview[0].articleId,
    }
    //articleId uses the same string value as articleSelected(also path name).
    //defaults to first articleId at constructor
    //compare the state of articleSelected to articleId/articleView
		console.log('%c PROPS at OVERVIEW constructor', 'color:black;background:red;padding:6px;border:1px dashed black', this.props)
  }

  handleClick = (articleId) => {
    this.setState(state => ({articleSelected: articleId}));
  }

  render() {
    const story = articlesOverview.find(obj => obj.articleId === this.state.articleSelected)
    console.log('%c PROPS at OVERVIEW render', 'color:black;background:red;padding:6px;border:1px dashed black', story)

    return (
      <div className="content-area">
        <div className="bubbles-submenu">
          <Bubbles
            pageView={this.state.pageView}
            articleSelected={this.state.articleSelected}
            articleId={this.state.articleSelected}
            articles={articlesOverview}
            story={story}
            onClick={this.handleCLick}
          />
        </div>
      </div>
    )
  }
}

export default Overview;
// export default withRouter(Overview);
