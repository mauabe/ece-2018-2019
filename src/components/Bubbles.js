import React, {Component} from 'react';
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";

import Bubble from './Bubble'
import Article from '../components/Article';


class Bubbles extends Component{
  constructor(props) {
		super(props);
	  this.state = { }
		console.log('%c PROPS at BUBBLES constructor', 'color:black;background:pink;padding:6px;border:1px dashed red', this.props)
  }

  handleBubbleClick = (articleId) => {
     this.props.onClick(articleId);
  }

  //iterate over submenus and populate bubbles
  renderBubbles = () => {
    const {articles, pageView, articleSelected, story, articleId } = this.props;

    const bubbleHtml = [];
    this.props.articles.forEach(article => {
      bubbleHtml.push(

        <Link to={`/${pageView}/${article.articleId}`} component={Article} activeClassName="active" >
          <Bubble
            key={article.articleId}
            divClassName="bubble sheihaiha"
            articleId={article.articleId}
            articles={articles}
            story={story}
            articleSelected={this.props.articleSelected}
            onClick={this.handleBubbleClick}
          />
        </Link>
      )
     });
    return  bubbleHtml;
  }

  render() {
    const{articleId} = this.props;
    return (
      <div key={articleId}>
        <div className="bubbles" >
            {this.renderBubbles()}
        </div>
        <div className="article">
          <Article
            pageView={this.props.pageView}
            articleSelected={this.props.articleSelected}
            articleId={this.props.articleId}
        />
        </div>
      </div>
    );
  }
}

export default Bubbles;
