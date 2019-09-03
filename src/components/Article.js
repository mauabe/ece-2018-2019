import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';


class Article extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelected: this.props.articleSelected,
    }
		console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  doesItExhist = () => {
    const {
      articleId, articleCallout1, articleCallout2, articleImage, articleImage2, articleImage3, articleImage4, articleImageProf, articleImageMain } = this.props.articleSelected;
    let articleClassname = `${articleId}`;

    if(articleImage.length === 0){}
  }




  render() {
    const {pageView} = this.props;
    const {
      articleId, professorTitle, professorFirstName, professorName, professorLastName, articleHeadline, articleSubhead, articleCallout1, articleCallout2, articleImage, articleImage2, articleImage3, articleImage4, articleImageProf, articleImageMain, articleImageAltText, articleImageAltText2, articleImageAltText3, articleImageAltText4, articleImageAltTextProf, articleImageAltTextMain, articleCaption, articleAuthor, articleImageCred, textCopy
    } = this.props.articleSelected;

    // articleAbrevTitle:'Ben Hogan and the Centers',
    // articleDescription: 'How one man made his swing part of golf history',



    return (
      <div className="article">

        <div className="article-prof-photo">
          <img src={`${articleImageProf}`} alt={`${articleImageAltTextProf}`} title={`${professorName}`} className={`articleImageProf ${articleId}`}/>
        </div>

        <div className="article-photo-main">
          <img src={`${articleImageMain}`} alt={`${articleImageAltTextMain}`} title={`${articleId}`} className={`articleImageMain ${articleId}`}/>
        </div>

        <div className="article-header">
          <h6 className="article-professor-title">{professorTitle}</h6>
          <h6 className="article-professor-name">{professorName}</h6>
          <h1 className="article-headline">{articleHeadline}</h1>
          <h3 className="article-subhead">{articleSubhead}</h3>
        </div>

        <div className="text-body">
          <p>{textCopy}</p>
        </div>

        <div className="callout-left">
          <h4>{articleCallout1}</h4>
        </div>

        <div className="callout-right">
          <h4>{articleCallout2}</h4>
        </div>

        <div className="picture-area">
          <div className="pictures">
            <img src={`${articleImage2}`} alt={`${articleImageAltText2}`} title={`${articleId}`} className={`articleImage2 ${articleId}`} />
            <img src={`${articleImage3}`} alt={`${articleImageAltText3}`} title={`${articleId}`}  className={`articleImage3 ${articleId}`} />
            <img src={`${articleImage4}`} alt={`${articleImageAltText4}`} title={`${articleId}`}  className={`articleImage4 ${articleId}`} />
          </div>

          <div className="credits">
            <span className="caption">{articleCaption}</span>
            <span className="image-credits">{articleImageCred}</span>
            <span className="autho-credits">{articleAuthor}</span>
          </div>

        </div>
      </div>
    )
  }

}
export default withRouter(Article);
