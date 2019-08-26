import React from 'react';
import * as data from '../assets/data'
import history from '../history';

const Logos = props => {
  console.log('%c PROPS at LOGOS', 'color:black;background:magenta;padding:6px;border:1px dashed black', props, history, props.location)

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

  // const logoOptions = {
  //   "feature": "props.data.logos.uclaecewhite",
  //   "content": "props.data.logos.ece",
  //   uclabottom: "props.data.logos.uclabottom",
  //   uclaeceblue: "data.logos.uclaeceblue",
  //   ecewhite: "props.data.logos.ecewhite",
  // }

  // Check if element is in the url pathname
  let pageView = 'content';
  let logoPick = "props.data.logos.ece";
  // const getPageView = (location) // (props.location, this.props.match or history?? )
  const components = history.pathname.split('/');
  if (components.indexOf('features') !== -1) {
    pageView = 'features';
    logoPick = "props.data.logos.uclaecewhite";
  }
  // if (components.indexOf('highlights') !== -1) { pageView = 'highlights'};
  // if (components.indexOf('students') !== -1) { pageView = 'students'};
  // if (components.indexOf('faculty') !== -1) { pageView = 'faculty'};
  // if (components.indexOf('overview') !== -1) { pageView = 'overview'};
  // if (components.indexOf('alumin') !== -1) { pageView = 'alumin'};

  return (
    <div className="logo">
      <span className={`logos${pageView}`}>
        <img
          className="logo-image"
          src={logoPick}
          alt="UCLA"
          title="UCLA"
        />
      </span>
    </div>
  );
}

export default Logos;
