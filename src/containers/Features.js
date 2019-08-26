import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router-dom";

import Bubbles from '../components/Bubbles';


class Features extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'features'
    }
    console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props);
  }

  render() {
    return (
      <div className="bubbles">
        <div className="bubbbles section">
          <div className="bubble-circle"></div>

            <Bubbles
            >
              <h4>this.props.headlineShort</h4>
            </Bubbles>
        </div>
      </div>
    );
  }
}

export default Features;
