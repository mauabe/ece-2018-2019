import React, {Component} from 'react';
import logo from '../assets/images/UCLA_footer_600.svg';
// import aiello from '../assets/images/aiello01.png';
// import samii from '../assets/images/rahmat-samii01.png';

class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = { }

		console.log('%c PROPS at BUBBLE constructor', 'color:black;background:yellow;padding:6px;border:1px dashed black', this.props)
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

        //  <div className="bubble-tag">
        //   {articleDescription}
        // </div>


  render() {
    const {articleSelection, articleId, articleAbrevTitle, articleImage, articleImageAltText, articleDescription, img1, img2, img3} = this.props;
    console.log(`${articleImage}`,`${articleImageAltText}`);

    return (
      <div className="bubble-entry" id={articleId} onClick={this.handleClick}>
        <div className="bubble-cropper">
          <img src={`${articleImage}`} alt={`${articleImageAltText}`} title={`${articleId}`} className="bubble-image" />
        </div>
        <div className="bubble-headline">
          {articleAbrevTitle}
        </div>

      </div>
    );

  }
}

export default Bubble;
