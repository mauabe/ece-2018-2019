import React, {Component} from 'react';

class Bubbles extends Component{

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

  //iterate over submenus and populate bubbles


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
