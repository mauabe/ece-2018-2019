import React, {Component} from 'react';
import logo from '../assets/UCLA_footer_600.svg';
import aiello from '../assets/aiello01.png';
import samii from '../assets/rahmat-samii01.png';




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




  render() {
    const {articleSelection, articleId, articleAbrevTitle, articleImage, articleImageAltText1, articleDescription} = this.props;
    console.log(`${articleImage}`,`${articleImageAltText1}`);

    return (
      <div className="bubble-entry" id={articleId} onClick={this.handleClick}>
        <div className="bubble-circle sheigaiha">
          <img src={`${articleImage}`} alt={`${articleImageAltText1}`} title={`${articleId}`} />
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
