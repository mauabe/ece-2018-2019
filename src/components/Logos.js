import React, {Component} from 'react';
import ece from '../assets/images/ECE_white.svg';
import uclaece from '../assets/images/UCLA_ECE_white.svg';
import history from '../history';

class Logos extends Component {
  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'features',
      logoPick: uclaece,
    }
		console.log('%c PROPS at LOGOS constructor', 'color:black;background:#orange;padding:6px;border:4px dashed yellow', this.props,  )
	}
    //history.location.pathname gets the location path (pageView)from path url
    //data.logos --> gets values from assets.data.logos

      //   const searchBar = () => {
      //     console.log('i am a happy searchbar')
      //   }

  // Check if pageView is in the url pathname
  // componentDidMount(){
  //   let uclaece = './src/assets/UCLA_ECE_white.svg';
  //   let ece = './src/assets/ECE_white.svg';

  //   const components = history.location.pathname.split('/');
  //   if (components.indexOf('features') !== -1) {this.setState.pageView = 'features'}
  //   if (components.indexOf('highlights') !== -1) {this.setState.pageView = 'highlights'}
  //   if (components.indexOf('students') !== -1) {this.setState.pageView = 'students'}
  //   if (components.indexOf('faculty') !== -1) {this.setState.pageView = 'faculty'}
  //   if (components.indexOf('overview') !== -1) {this.setState.pageView = 'overview'}
  //   if (components.indexOf('alumni') !== -1) {this.setState.pageView = 'alumni'}

  //   if(this.setState.pageView === "features"){
  //     this.setState.logoPick = uclaece
  //   } else {this.setState.logoPick = ece};
  // }

  render(){
    return (
      <div className="logo">
        <span className={`logos-${this.props.pageView}`}>
          <img
            className="logo-image"
            src={ece}
            // src={this.props.logoPick}
            alt="UCLA ECE"
            title="UCLA ECE"
          />
        </span>
      </div>
    );
  }
}

export default Logos;
