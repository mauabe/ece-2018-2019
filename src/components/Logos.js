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
    console.log('%c PROPS at LOGOS constructor', 'color:black;background:#orange;padding:6px;border:4px dashed yellow', this.props )
    //LOGOS should receive {pageView} as PROPS
	}

  render(){

    const {pageView} = this.props;
    let logoPick = ece;
    if (pageView == 'features'){
      logoPick = uclaee;
    }
    return (
      <div className="logos">
        <span className={`logos-${this.props.pageView}`}>
          <img
            className="logo-image"
            src={logoPick}
            alt="UCLA ECE"
            title="UCLA ECE"
          />
        </span>
      </div>
    );
  }
}

export default Logos;
