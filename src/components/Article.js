import React, {Component, Fragment} from 'react';
import{withRouter} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



class Article extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelection: this.props.articleSelection,
    }
		console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  // doesItExhist = () => {
  //   const {
  //     articleId, articleCallout1, articleCallout2, articleImage1, articleImage2, articleImage3, articleImage4, articleImageProf, articleImageMain } = this.props.articleSelection;
  //   let articleClassname = `${articleId}`;

  //   if(articleImage.length === 0){console.log('Image: no image found')}
  //   if(articleImage2.length === 0){console.log('Image2:no image found')}
  //   if(articleImage3.length === 0){console.log('Image3:no image found')}
  //   if(articleImage4.length === 0){console.log('Image4:no image found')}
  //   if(articleImageMain.length === 0){console.log('ImageMain:no image found')}
  // }

  HtmlComponent = () => {
    const html = `${this.props.story.textCopy}`;
    return (
      <div className={`text-body ${this.props.story.articleId}`}>{ ReactHtmlParser(html) }</div>
    )
  }

  // createMarkup = () => {
  //   return {__html: `${this.props.story.textCopy}`};
  // }

  render() {
    const {pageView} = this.props;
    const {
      articleId, professorTitle, professorFirstName, professorName, professorLastName, articleHeadline, articleSubhead, articleCallout1, articleCallout2, articleImage1, articleImage2, articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf, articleImageMain, articleImageAltText1, articleImageAltText2, articleImageAltText3, articleImageAltText4, articleImageAltText5,articleImageAltText6, articleImageAltTextProf, articleImageAltTextMain, articleCaption, articleAuthor, articleImageCred, textCopy
    } = this.props.story;


    return (
    <div className={`article ${articleId}`}>

      <div className={`prof-frame ${articleId}`}>
          <img src={`${articleImageProf}`} alt={`${articleImageAltTextProf}`} title={`${professorName}`} className={`articleImageProf ${articleId}`}/>
      </div>

      <div className={`photo-main-frame ${articleId}`}>
        <div className={`article-photo-main ${articleId}`}>
          <img src={`${articleImageMain}`}
          alt={`${articleImageAltTextMain}`}
          title={`${articleId}`}
          className={`articleImageMain ${articleId}`}/>
        </div>
      </div>

      <div className={`article-header ${articleId}`}>
        <h6 className="article-professor-title">{professorTitle}</h6>
        <h6 className="article-professor-name">{professorName}</h6>
        <h1 className="article-headline">{articleHeadline}</h1>
        <h3 className="article-subhead">{articleSubhead}</h3>
      </div>

      {this.HtmlComponent()}
      {/* <div className={`text-body ${articleId}`}>
        dangerously set
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div> */}

      <div className={`callout-left ${articleId}`}>
        <h4>{articleCallout1}</h4>
      </div>

      <div className={`callout-right ${articleId}`}>
        <h4>{articleCallout2}</h4>
      </div>

      <div className={`picture-area ${articleId}`}>
        <div className={`picture-area ${articleId}`}>
         <div className="frame">
            <img src={`${articleImage1}`} alt={`${articleImageAltText1}`} title={`${articleId}`} className={`articleImage1 ${articleId}`} />
            <img src={`${articleImage2}`} alt={`${articleImageAltText2}`} title={`${articleId}`} className={`articleImage2 ${articleId}`} />
            <img src={`${articleImage3}`} alt={`${articleImageAltText3}`} title={`${articleId}`}  className={`articleImage3 ${articleId}`} />
            <img src={`${articleImage4}`} alt={`${articleImageAltText4}`} title={`${articleId}`}  className={`articleImage4 ${articleId}`} />
            <img src={`${articleImage5}`} alt={`${articleImageAltText5}`} title={`${articleId}`}  className={`articleImage3 ${articleId}`} />
            <img src={`${articleImage6}`} alt={`${articleImageAltText6}`} title={`${articleId}`}  className={`articleImage4 ${articleId}`} />
          </div>

          <div className={`credits ${articleId}`}>
            <span className="caption">{articleCaption}</span>
            <span className="image-credits">{articleImageCred}</span>
            <span className="author-credits">{articleAuthor}</span>
          </div>
        </div>
      </div>
    </div>
    )
  }

}
export default withRouter(Article);
