import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
// import MenuBoxLarge from './MenuBoxLarge';
import * as data from '../assets/data'

class Menubar extends Component{
  constructor(props) {
		super(props);
	  this.state = { }
		console.log('%c PROPS at MENUBAR', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', data.topMenu);
	}


	navigationHtml = () => {
		let html = [];
		data.topMenu.forEach((value, index) =>{
			const path = value[0];
			const label = value[1];

			html.push(
				<NavLink to={"/" + path}  activeClassName="active">
					<li key={index} className="menu-box-large">
						{label}
					</li>
				</NavLink>
				)
			});
		return html;
	}

  // buildSubMenus = props => {
	// 	console.log('%c PROPS at Navbar', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
	// 	// pageView={this.state.pageView}
  // }

  render() {
    return (
      <div className="menu-container">
				<ul className="top-menu">
					{this.navigationHtml()}
				</ul>
      </div>
    );
  }
}

export default Menubar;
