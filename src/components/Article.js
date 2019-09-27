import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Story from './Story';

class Article extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelection: this.props.articleSelection,
    }
		// console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  renderHeader = () => {
    const {
      articleId, professorTitle, professorName, articleHeadline, articleSubhead
    } = this.props.story;
    return(
      <div className={`article-header ${articleId}`}>
        <span className="article-professor-title">{professorTitle} </span>
        <span className="article-professor-name">{professorName} </span>
        <div className="article-headline">{articleHeadline} </div>
        <div className="article-subhead">{articleSubhead} </div>
      </div>
    )
  }

  renderTextCopy = () => {
    const html = (this.props.story.textCopy.length === 0) ? <Story /> : `${this.props.story.textCopy}`;
    return (
      <div className="text-copy">
      <div className={`text-body ${this.props.story.articleId}`}>{ ReactHtmlParser(html) }</div>
      </div>
    )
  }

  render() {
    // const {pageView} = this.props;
    const {
      articleId, professorName, articleImage1, articleImage2, articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf, articleImageMain, articleImageAltText1, articleImageAltText2, articleImageAltText3, articleImageAltText4, articleImageAltText5,articleImageAltText6, articleImageAltTextProf, articleImageAltTextMain, articleCaption1, articleCaption2, articleCaption3, articleAuthor, articleImageCred
    } = this.props.story;

    //check if image exists, assing class name none it is...
    let articleImage1Class = (articleImage1.length === 0)? 'none' : `${articleId}`;
    let articleImage2Class = (articleImage2.length === 0)? 'none' : `${articleId}`;
    let articleImage3Class = (articleImage3.length === 0)? 'none' : `${articleId}`;
    let articleImage4Class = (articleImage4.length === 0)? 'none' : `${articleId}`;
    let articleImage5Class = (articleImage5.length === 0)? 'none' : `${articleId}`;
    let articleImage6Class = (articleImage6.length === 0)? 'none' : `${articleId}`;
    let articleImageProfClass = (articleImageProf.length === 0)? 'none' : `${articleId}`;

    //check if images or caption on row exist, if not assing class 'none' to hide it
    let row2ClassName = (articleImage3.length === 0 && articleImage4.length  === 0)? 'none' : 'row';
    let row3ClassName = (articleImage5.length === 0 && articleImage5.length  === 0)? 'none' : 'row';
    let caption2ClassName = (articleCaption2.length === 0) ? "caption-none" : "caption";
    let caption3ClassName = (articleCaption3.length === 0) ? "caption-none" : "caption";


    return (
    <div className={`article ${articleId}`}>

      <div className={`article-main-photo ${articleId}`}>
        <img src={`${articleImageMain}`}
        alt={`${articleImageAltTextMain}`}
        title={`${articleId}`}
        className={`articleImageMain ${articleId}`}/>
      </div>
      {this.renderHeader()}

      <div className={`prof-frame ${articleId}`}>
          <img src={`${articleImageProf}`} alt={`${articleImageAltTextProf}`} title={`${professorName}`} className={`articleImageProf ${articleImageProfClass}`}/>
      </div>

      {this.renderTextCopy()}

      <div className={`picture-area ${articleId}`}>
        <div className="row">
          <img src={`${articleImage1}`} alt={`${articleImageAltText1}`} title={`${articleId}`} className={`articleImageLeft ${articleImage1Class}`} />
          <img src={`${articleImage2}`} alt={`${articleImageAltText2}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage2Class}`} />
        </div>
        <p className="caption">{articleCaption1}</p>

        <div className={`${row2ClassName}`}>
          <img src={`${articleImage3}`} alt={`${articleImageAltText3}`} title={`${articleId}`} className={`articleImageLeft ${articleImage3Class}`} />
          <img src={`${articleImage4}`} alt={`${articleImageAltText4}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage4Class}`} />
        </div>
        <p className={caption2ClassName}>{articleCaption2}</p>

        <div className={`${row3ClassName}`}>
          <img src={`${articleImage5}`} alt={`${articleImageAltText5}`} title={`${articleId}`} className={`articleImageLeft ${articleImage5Class}`} />
          <img src={`${articleImage6}`} alt={`${articleImageAltText6}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage6Class}`} />
        </div>
        <p className={caption3ClassName}>{articleCaption3}</p>
      </div>

      <div className={`credits ${articleId}`}>
        <p className="image-credits">{articleImageCred}</p>
        <p className="author-credits">{articleAuthor}</p>
      </div>

    </div>
    )
  }

}
export default withRouter(Article);
