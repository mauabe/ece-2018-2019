import React, {Component} from 'react';
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";

import MenuBoxLarge from './MenuBoxLarge';
import MenuBoxSmall from './MenuBoxSmall';
import * as data from '../assets/data'
import history from '../history';


class Menubar extends Component{
  constructor(props) {
		super(props);
	  this.state = {
			pageView: 'features',
			menuExpanded: false,
			submenuExpanded: false,
    }
		console.log('%c PROPS at MENUBAR', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', data.topMenu);
	}

	componentDidMount() {
		const props = this.props;
  }

  // GET LOCATION AND UPDATE PAGE VIEw

  //PASS MENU DATA DOWN

  //BUILD MENUS FROM DATA



	navigationHtml = () => {
		let html = [];
		data.topMenu.forEach((value, index) =>{
			const path = value[0];
			const label = value[1];

			html.push(

				<li key={index} className="menu-box-large">
						<NavLink to={"/" + path}  activeClassName="active">
							{label}
						</NavLink>
				</li>
				)
			});
			return html;
	}

  buildSubMenus = props => {
		console.log('%c PROPS at Navbar', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
		// pageView={this.state.pageView}
  }


  render() {
		const menuItem = this.state.pageView;
    return (
      <div className="menu-container">

						<ul className="top-menu">
							{this.navigationHtml()}
						</ul>

				{/* <div className="menu-container">
					<MenuBoxLarge> large </MenuBoxLarge>
				</div>

				<div className="menu-container">
					<MenuBoxSmall> small </MenuBoxSmall>
				</div> */}

      </div>
    );
  }
}

export default withRouter(Menubar);
