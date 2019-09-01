import React, {Component} from 'react';

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
    const {articleSelection, articleId, articleAbrevTitle, articleImage, articleDescription} = this.props;

    return (
      <div className="bubble" id={articleId}>
        <div className="bubble-circle">
          <img src={articleImage} alt="bubble image" title="bubble link" />
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
