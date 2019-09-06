import React, {Component} from 'react';
import{withRouter, Route, Redirect} from 'react-router-dom';

import Bubbles from '../components/Bubbles';
import {articlesOverview} from '../assets/articlesOverview.js';
import * as data from '../assets/data'
import Article from '../components/Article';

class Overview extends Component{
  constructor(props) {
		super(props);
	  this.state = {
    }
    //articleId uses the same string value as articleSelection(also path name).
    //defaults to first articleId at constructor
    //compare the state of articleSelection to articleId/articleView
		console.log('%c PROPS at OVERVIEW constructor', 'color:black;background:red;padding:6px;border:1px dashed black', this.state)
  }

   render() {

    return (
      <div className="content-area">
        <div className="bubbles-submenu">
          <Bubbles
            pageView="overview"
            articles={articlesOverview}
            />
        </div>
      </div>
    )
  }
}

export default Overview;
// export default withRouter(Overview);
