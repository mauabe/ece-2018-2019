import React, {Component} from 'react';
import * as data from '../assets/data'
import history from '../history';

class Logos extends Component {
  constructor(props) {
		super(props);
	  this.state = {
      pageView: '',
      logoPick: "data.logos.uclaecewhite",
    }
		console.log('%c PROPS at LOGOS constructor', 'color:black;background:#b7ad55;padding:6px;border:4px dashed yellow', this.props, data.logos )
	}
    //history.location.pathname gets the location path (pageView)from path url
    //data.logos --> gets values from assets.data.logos

      //   const searchBar = () => {
      //     console.log('i am a happy searchbar')
      //   }

      //logos images from assets.data.logos
      // const logos = {
      //   "uclabottom": "public/img/UCLA_bottom_600.svg",
      //   "uclaeceblue": "public/img/UCLA_ECE.svg",
      //   "uclaecewhite": "public/img/UCLA_ECE_WHITE.svg",
      //   ecewhite: "public/img/ECE_WHITE.svg",
      //   ece: "public/img/UCLA_ECE.svg",
      // };

  // Check if pageView is in the url pathname
  getPageView = (history) => {
    let pageView = this.state.pageView;
    const components = history.location.pathname.split('/');
    if (components.indexOf('features') !== -1) {
      this.setState.pageView = 'features';
      this.setState.logoPick = "data.logos.uclaecewhite";
    } else {this.setState.logoPick = "data.logos.ecewhite"}
  }
    render(){
    return (
      <div className="logo">
        <span className={`logos${this.state.pageView}`}>
          <img
            className="logo-image"
            src={this.state.logoPick}
            alt="UCLA"
            title="UCLA"
          />
        </span>
      </div>
    );
  }
}

export default Logos;
