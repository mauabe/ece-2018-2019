import React, {Component} from 'react';
import Bubbles from '../components/Bubbles';
import {articlesFeatures} from '../assets/articlesFeatures.js';

class Features extends Component{
  constructor(props) {
    super(props);
    this.state = {}
    // console.log('%c PROPS at FACUL:TUY constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }
  render() {
    return (
      <div className="content-area">
        <Bubbles
          pageView="features"
          articles={articlesFeatures}
        />
      </div>
    )
  }
}

export default Features;
