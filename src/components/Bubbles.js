import React, {Component} from 'react';
import {NavLink, Router, Route, Switch, Redirect, Link } from "react-router-dom";

import Bubble from './Bubble'
import Article from '../components/Article';


class Bubbles extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      articleSelection: this.props.articles[0].articleId
     }
		console.log('%c PROPS at BUBBLES constructor', 'color:black;background:pink;padding:6px;border:1px dashed red', this.props)
  }

  handleClick = (articleId) => {
    this.setState(state => ({articleSelection: articleId}));
  }

  //iterate over submenus and populate bubbles
  renderBubbles = () => {
    const {articles} = this.props;

    const bubbleHtml = [];
    articles.map(obj => {
      bubbleHtml.push(
        <Bubble
          key={obj.articleId}
          divClassName={`bubble sheihaiha ${obj.articleId}`}
          articleId={obj.articleId}
          articleSelection={this.state.articleSelection}
          professorTitle={obj.professorTitle}
          professorName={obj.professorName}
          articleAbrevTitle={obj.articleAbrevTitle}
          articleImage={obj.articleImage}
          articleImageAltText={obj.articleImageAltText}
          onClick={this.handleClick}
        />
      )
     });
    return bubbleHtml;
  }

  renderArticle = () => {
    const {articles} = this.props;
    const {articleSelection} = this.state;

    // find story that matches articleSelection and pass it to Article
    const story = articles.find(obj => obj.articleId === articleSelection)
    console.log('%c PROPS at BUBBLES render article', 'color:black;background:red;padding:16px;border:1px dashed black', story)

    return(
      <Article
        story={story}
      />
    )
  }

  render() {
    const {} = this.props;
    const {} = this.state;

    return (
      <div className="page-bubbles-article">
        <NavLink to={`/${this.props.pageView}/${this.state.articleSelection}`} component={Article}  activeClassName="active" >
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
