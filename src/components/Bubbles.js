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
    const {articles, pageView, articleSelected, articleId } = this.props;

    const bubbleHtml = [];

    this.props.articles.map(obj => {
      bubbleHtml.push(
          <Bubble
            key={obj.articleId}
            divClassName="bubble sheihaiha"
            articleId={obj.articleId}
            articles={this.props.articles}
            articleSelected={this.props.articleSelected}
            onClick={this.handleBubbleClick}
          />
      )
     });
    return  bubbleHtml;
  }

  render() {
    return (
      <div>
        <div className="bubbles" >
          {this.renderBubbles()}
      </div>

      <Link to={`/${this.props.pageView}/${this.props.articleId}`} component={Article} activeClassName="active" >
        <Article
          pageView={this.props.pageView}
          articleSelected={this.props.articleSelected}
          articleId={this.props.articleId}
          articles={this.props.articles}
        />
      </Link>
      </div>
    );
  }
}

export default Bubbles;
