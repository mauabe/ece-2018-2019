import React, {Component} from 'react';
import {NavLink, Router, Route, Switch, Redirect, Link } from "react-router-dom";

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
  handleMouseOver = (articleId) => {
    //  this.props.onClick(articleId); change color of border and apply filter
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
    return bubbleHtml;
  }

  renderArticle = () => {
    const{pageView, articleId} = this.props;
    return(
        <Article
          pageView={this.props.pageView}
          articleSelected={this.props.articleSelected}
          articleId={this.props.articleId}
          articles={this.props.articles}
        />
    )
  }

  render() {
    return (
      <div className="page-bubbles-article">
        <NavLink to={`/${this.props.pageView}/${this.props.articleId}`} component={Article} onMouseOver={this.handleMouseOver} activeClassName="active" >
            {this.renderBubbles()}
        </NavLink>
        <div>
          {this.renderArticle()}
        </div>
      </div>
    );
  }
}

export default Bubbles;
