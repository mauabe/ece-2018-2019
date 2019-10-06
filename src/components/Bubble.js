import React, {Component} from 'react';
// import logo from '../assets/images/UCLA_footer_600.svg';
import {NavLink} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Bubble extends Component{

  constructor(props) {
		super(props);
    this.state = {
    }
    this.handleBubbleClick = this.handleBubbleClick.bind(this);
		// console.log('%c PROPS at BUBBLE constructor', 'color:black;background:cyan;padding:6px;border:1px dashed black', this.props)
  }

  handleBubbleClick (e) {
    const{articleId} = this.props;
    // e.preventDefault();
    // this.setState({selected: articleId });
    this.props.onClick(articleId, e);
    // console.log('%c PROPS at BUBBLE handleclick e', 'color:black;background:cyan;padding:6px;border:1px dashed black', e)
  }



  render() {
    const {pageView, articleId, articleSelection, articleAbrevTitle, articleImageProf, articleImageAltTextProf, professorTitle, professorName} = this.props ;
    const className = ( articleSelection === articleId) ? `${articleId} active`: `${articleId}`;

    return (
      <NavLink exact to={`/${pageView}/${articleId}`} activeClassName="active" className="bubble-link">
        <div className={`bubble ${className}`} key={articleId} onClick={this.handleBubbleClick} >
          <div className="bubble-cropper">
            <img src={`${articleImageProf}`} alt={`${articleImageAltTextProf}`} title={`${articleId}`} className={`bubble-image ${className}`} />
          </div>
          <div>
            <span className={`bubble-profTitle ${className}`}>{professorTitle} </span>&nbsp;<span className={`bubble-profName ${className}`}>{professorName}</span>
          </div>
          <div className={`bubble-headline ${className}`}>{ ReactHtmlParser(articleAbrevTitle) }</div>
        </div>
       </NavLink>
    );
  }
}

export default Bubble;
