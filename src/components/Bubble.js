import React, {Component} from 'react';
import logo from '../assets/images/UCLA_footer_600.svg';
import {NavLink} from "react-router-dom";


class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = {
    }
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
		console.log('%c PROPS at BUBBLE constructor', 'color:black;background:cyan;padding:6px;border:1px dashed black', this.props)
  }

  handleBubbleClick (e) {
    const{articleId} = this.props;
    // e.preventDefault();
    this.props.onClick(articleId, e);
    console.log('%c PROPS at BUBBLE handleclick e', 'color:black;background:cyan;padding:6px;border:1px dashed black', e)
  }



  render() {
    const {pageView, articleId, articleSelection, articleAbrevTitle, articleImage, articleImageAltText, professorTitle, professorName} = this.props ;
    const className = ( articleSelection === articleId) ? `${articleId} active`: `${articleId}`;
    const {mouseOverState} = this.state;

    return (
      <NavLink exact to={`/${pageView}/${articleId}`} activeClassName="active" className="bubble-row">
        <div className={`bubble-entry ${className}`} key={articleId} onClick={(e) => this.handleBubbleClick(articleId, e)} >
          <div className="bubble-cropper">
            <img src={`${articleImage}`} alt={`${articleImageAltText}`} title={`${articleId}`} className={`bubble-image ${className}`} />
          </div>
          <div className={`bubble-profTitle ${className}`}>{professorTitle}</div>
          <div className={`bubble-profName ${className}`}>{professorName}</div>
          <div className={`bubble-headline ${className}`}>{articleAbrevTitle}</div>
        </div>
       </NavLink>
    );
  }
}

export default Bubble;
