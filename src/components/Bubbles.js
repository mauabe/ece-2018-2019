import React, {Component} from 'react';

import Bubble from './Bubble'
// import * as data from '../assets/data'
// import history from '../history';
// import {articlesFeatures} from '../assets/articlesFeatures';
// import {articlesHighlights} from '../assets/articlesHighlights';
// import {articlesStudents} from '../assets/articlesStudents';
// import {articlesFaculty} from '../assets/articlesFaculty';
// import {articlesOverview} from '../assets/articlesOverview';
// import {articlesAlumni} from '../assets/articlesAlumni';


class Bubbles extends Component{
  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelected:this.props.articleSelected,
    }
		console.log('%c PROPS at BUBBLES constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

	// componentDidMount() {
	// 	const props = this.props;
  // }

  handleBubbleClick = (e) => {
    e.preventDefault();
    this.props.onClick(e.target.value);
  }

  //iterate over submenus and populate bubbles
  renderBubbles = () => {
    const {articleId, articles, articleAbrevTitle, articleImage, articleDescription } = this.props;
    const {articleSelected} = this.state;

    const bubbleHtml = [];
    this.props.articles.forEach(article => {
      bubbleHtml.push(
        <Bubble
          key={article.articleId}
          divClassName="bubble sheihaiha"
          articleSelected={this.state.articleSelected}
          articleId={articleId}
          articleAbrevTitle={article.articleAbrevTitle}
          articleImage ={article.articleImage}
          articleDescription ={article.articleDescription}
          onBubbleClick={this.props.onClick}
        />)
     });
    return  bubbleHtml;
  }

  render() {
    const{articleId} = this.props;
    return (
      <div className="bubbles" key={articleId}>
          {this.renderBubbles()}
      </div>
    );
  }
}

export default Bubbles;
