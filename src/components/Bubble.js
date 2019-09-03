import React, {Component} from 'react';
import logo from '../assets/images/UCLA_footer_600.svg';

class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = {
    }
    this.handleBubbleClick=this.handleBubbleClick.bind(this);
		console.log('%c PROPS at BUBBLE constructor', 'color:black;background:cyan;padding:6px;border:1px dashed black', this.props)
  }

  handleBubbleClick = (e, articleId) => {
    e.preventDefault();
    this.props.onClick(e.target.value, {articleId});
    console.log('%c PROPS at BUBBLE handleclick', 'color:black;background:cyan;padding:6px;border:1px dashed black', e.target.value)
  }



  render() {
    const {articleId, articleAbrevTitle, articleImage, articleImageAltText, articleDescription} = this.props.articleSelected;
    console.log('BUBBLE RENDER articleImage alttext', `${articleImage}`,`${articleImageAltText}`);

    return (
      <div className="bubble-entry" key={articleId} onClick={this.handleBubbleClick}>
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
