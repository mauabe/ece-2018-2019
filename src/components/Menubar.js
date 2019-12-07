import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as data from '../assets/data'

class Menubar extends Component{
  // constructor(props) {
	// 	super(props);
	//   this.state = {}
		// console.log('%c PROPS at MENUBAR constructor ', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', this.props);
	// }

	// componentDidMount(){
		// const components = this.props.history.location.pathname.split('/');
    // console.log(' MENUBARcomppnents: ', components)
    // if (components.indexOf('features') !== -1) this.setState ({pageView: 'features'});
    // if (components.indexOf('highlights') !== -1) this.setState ({pageView: 'highlights'});
    // if (components.indexOf('students') !== -1) this.setState ({pageView: 'students'});
    // if (components.indexOf('faculty') !== -1) this.setState ({pageView: 'faculty'});
    // if (components.indexOf('overview') !== -1) this.setState ({pageView: 'overview'});
		// if (components.indexOf('alumni') !== -1) this.setState ({pageView: 'alumni'});
	// }

	navigationHtml = () => {
		let html = [];
		data.topMenu.forEach((value, index) =>{
			const path = value[0];
			const label = value[1];

			html.push(
				<NavLink to={"/" + path}  activeClassName="active" key={index}>
					<li key={index} className="menu-box-large">
						{label}
					</li>
				</NavLink>
				)
			});
			return html;
		}

		render() {
				// console.log('%c this.PROPS at MENUBAR render ', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', this.props);
    return (
      <div className="menu-container">
				<ul className="top-menu">
					{this.navigationHtml()}
				</ul>
      </div>
    );
  }
}

export default withRouter(Menubar);
