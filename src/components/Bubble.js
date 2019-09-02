import React, {Component} from 'react';
// import * as image from '../assets/UCLA_footer_600.svg';
import logo from '../assets/UCLA_footer_600.svg';

class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = { }

		console.log('%c PROPS at ARTICLE constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  handleClick =(e) => {
    e.preventDefault();
    let selection = e.target.value
    this.props.onBubbleClick(selection);
  }

  //renderArticleDescription
  //articleSelected={this.state.articleSelected}
  //articleId={articleId}
  //articleAbrevTitle={article.articleAbrevTitle}
  //a//rticleImage ={article.articleImage}
  //articleDescription ={article.articleDescription}
  // onBubleClick={this.handleBubbleClick}




  render() {
    const {articleSelection, articleId, articleAbrevTitle, articleImage, articleImageAltText1, articleDescription} = this.props;

    return (
      <div className="bubble-entry" id={articleId}>
        <div className="bubble-circle sheigaiha">
          <img src={`${articleImage}`} alt={`${articleImageAltText1}`} title={`${articleImageAltText1}`} />
          {/* <img src={logo} alt="article image" title="article imagelink" /> */}
        </div>
        <div className="bubble-headline">
          {articleAbrevTitle}
        </div>
        <div className="bubble-tag">
          {articleDescription}
        </div>
      </div>
    );

  }
}

export default Bubble;
