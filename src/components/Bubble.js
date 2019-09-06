import React, {Component} from 'react';
import logo from '../assets/images/UCLA_footer_600.svg';

class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = {
    }
    // this.handleBubbleClick=this.handleBubbleClick.bind(this);
		console.log('%c PROPS at BUBBLE constructor', 'color:black;background:cyan;padding:6px;border:1px dashed black', this.props)
  }

  handleBubbleClick = (e) => {
    e.preventDefault();
    this.props.onClick(e.target.value);
    console.log('%c PROPS at BUBBLE handleclick', 'color:black;background:cyan;padding:6px;border:1px dashed black', e.target.value)
  }



  render() {
    const {articleId, articleSelection, articleAbrevTitle, articleImage, articleImageAltText, professorTitle, professorName} = this.props ;
    const className = ( articleSelection === articleId) ? `${articleId} active`: `${articleId}`;
    const {mouseOverState} = this.state;

    return (
      <div className={`bubble-entry over-${mouseOverState} ${className}`} key={articleId} onClick={this.handleBubbleClick} >
        <div className="bubble-cropper">
          <img src={`${articleImage}`} alt={`${articleImageAltText}`} title={`${articleId}`} className={`bubble-image ${className}`} />
        </div>
        <div className={`bubble-profTitle ${className}`}>{professorTitle}</div>
        <div className={`bubble-profName ${className}`}>{professorName}</div>
        <div className={`bubble-headline ${className}`}>{articleAbrevTitle}</div>
      </div>
    );
  }
}

export default Bubble;
