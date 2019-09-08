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

  doesItExhist = () => {
    const {
      articleId, articleCallout1, articleCallout2, articleImage1, articleImage2, articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf, articleCaption1, articleCaption2, articleCaption3, articleAuthor, articleImageCred, articleImageMain
    } = this.props.story;

   //   if(articleImage2.length === 0){console.log('Image2:no image found')}
  //   if(articleImage3.length === 0){console.log('Image3:no image found')}
  //   if(articleImage4.length === 0){console.log('Image4:no image found')}
  //   if(articleImage5.length === 0){console.log('Image4:no image found')}
  //   if(articleImage6.length === 0){console.log('Image4:no image found')}
  //   if(articleImageMain.length === 0){console.log('ImageMain:no image found')}
  }

  renderHeader = () => {
    const {
      articleId, professorTitle, professorFirstName, professorName, professorLastName, articleHeadline, articleSubhead,  articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf,
    } = this.props.story;
    return(
      <div className={`article-header ${articleId}`}>
        <span className="article-professor-title">{professorTitle}</span>
        <span className="article-professor-name">{professorName}</span>
        <h1 className="article-headline">{articleHeadline}</h1>
        <h3 className="article-subhead">{articleSubhead}</h3>
      </div>
    )
  }

  renderTextCopy = () => {
    const html = `${this.props.story.textCopy}`;
    return (
      <div className={`text-body ${this.props.story.articleId}`}>{ ReactHtmlParser(html) }</div>
    )
  }



  render() {
    const {pageView} = this.props;
    const {
      articleId, professorTitle, professorFirstName, professorName, professorLastName, articleHeadline, articleSubhead, articleCallout1, articleCallout2, articleImage1, articleImage2, articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf, articleImageMain, articleImageAltText1, articleImageAltText2, articleImageAltText3, articleImageAltText4, articleImageAltText5,articleImageAltText6, articleImageAltTextProf, articleImageAltTextMain, articleCaption1, articleCaption2, articleCaption3, articleAuthor, articleImageCred, textCopy
    } = this.props.story;

    //check if image exists, assing class name none it is...
    let articleImage1Class = (articleImage1.length === 0)? 'none' : `${articleId}`;
    let articleImage2Class = (articleImage2.length === 0)? 'none' : `${articleId}`;
    let articleImage3Class = (articleImage3.length === 0)? 'none' : `${articleId}`;
    let articleImage4Class = (articleImage4.length === 0)? 'none' : `${articleId}`;
    let articleImage5Class = (articleImage5.length === 0)? 'none' : `${articleId}`;
    let articleImage6Class = (articleImage6.length === 0)? 'none' : `${articleId}`;
    let articleImageMainClass = (articleImageMain.length === 0)? 'none' : `${articleId}`;


    return (
    <div className={`article ${articleId}`}>

      {this.renderHeader()}

      {this.renderTextCopy()}
      
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
        <div className="row">
          <img src={`${articleImage1}`} alt={`${articleImageAltText1}`} title={`${articleId}`} className={`articleImageLeft ${articleImage1Class}`} />
          <img src={`${articleImage2}`} alt={`${articleImageAltText2}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage2Class}`} />
          <p className="caption">{articleCaption1}</p>
        </div>
        <div className="row">
          <img src={`${articleImage3}`} alt={`${articleImageAltText1}`} title={`${articleId}`} className={`articleImageLeft ${articleImage3Class}`} />
          <img src={`${articleImage4}`} alt={`${articleImageAltText2}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage4Class}`} />
          <p className="caption">{articleCaption2}</p>
        </div>
        <div className="row">
          <img src={`${articleImage5}`} alt={`${articleImageAltText1}`} title={`${articleId}`} className={`articleImageLeft ${articleImage5Class}`} />
          <img src={`${articleImage6}`} alt={`${articleImageAltText2}`} title={`${articleId}`}
          className={`articleImageRight ${articleImage6Class}`} />
          <p className="caption">{articleCaption3}</p>
        </div>
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
