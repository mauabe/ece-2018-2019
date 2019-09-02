import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';


class Article extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView
    }
		console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  componentDidMount(){

  }


  renderArticleHeader = () => {

  }


  render() {
    return (
      <div className="article">
        <div className="article-header">
          ARTICLE HEADER GOES HERE
        </div>
        <div className="text-body">
          textbody
        </div>
        <div className="callout">
          textbody
        </div>
        <div className="picture-area">
          textbody
        </div>

      </div>
    )
  }
}



{/* <Switch>{(this.props.match, this.routes)}</Switch> */}

export default withRouter(Article);
