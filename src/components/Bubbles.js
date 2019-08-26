import React, {Component} from 'react';

import * as data from '../assets/data'
import history from '../history';


class Bubbles extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature',
      logoPick: "props.data.logos.ece",
    }
		console.log('%c PROPS at BUBBLES constructor', 'color:black;background:#b7ad55;padding:6px;border:2px dashed pink', this.props)
	}

	componentDidMount() {
		const props = this.props;
  }

  // Check if element is in the url pathname
  // location // (props.location, this.props.match or history?? )

  getPageView = (location) => {
  const components = history.location.pathname.split('/');
  if (components.indexOf('features') !== -1) {
    this.setState.pageView = 'features';
    this.setState.logoPick = "props.data.logos.uclaecewhite";
  }
  // if (components.indexOf('highlights') !== -1) { pageView = 'highlights'};
  // if (components.indexOf('students') !== -1) { pageView = 'students'};
  // if (components.indexOf('faculty') !== -1) { pageView = 'faculty'};
  // if (components.indexOf('overview') !== -1) { pageView = 'overview'};
  // if (components.indexOf('alumin') !== -1) { pageView = 'alumin'};

  //iterate over submenus and populate bubbles
  }

  render() {
    return (
      <div className="bubbles">
        <div className="bubbbles section">
          <div className="bubble-circle"></div>

          <h4>this.props.headlineShort</h4>

          <button className="button is-danger is-outlined">
            Hello
          </button>
        </div>
      </div>
    );
  }
}

export default Bubbles;
