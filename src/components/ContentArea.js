import React, {Component} from 'react';

import Bubbles from './Bubbles';
import Content from './ContentArea';
import Footer from './Footer';

class ContentArea extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: 'feature'
    }
		console.log('%c PROPS at APP constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	}

	componentDidMount() {
		const props = this.props;
  }

  render


  render() {
    return (
      <div className="App">
        <div>
THIS IS CONTENT AREA RENDER: {this.props.match}
        </div>
      </div>
    )
  }
}

export default ContentArea;
