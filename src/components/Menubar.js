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



	navigationHtml = props => {
		let html = [];
		data.topMenu.forEach((value, index) =>{
			const path = value[0];
			const label = value[1];

			html.push(
				(<li key = {index}>
					<MenuBoxLarge>
						<NavLink to={"/" + path}  activeClassName="active">
							{label}
						</NavLink>
					</MenuBoxLarge>
				</li>
				))
			});
			console.log('%c HTML at MENUBAR', 'color:black;background:dodgerblue;padding:6px;border:1px dashed black', html);
			return html;
		}


// from HEADER BAR
		// itemsHtml = () =>
		// {
		// 	// Link data for HTML generation.
		// 	let linkData = values.appModesAndLabelsArray;
		// 	// Generate HTML from link data.
		// 	let html = [];
		// 	linkData.forEach((value, index) =>
		// 	{
		// 		const path = value[0];
		// 		const title = value[1];

		// 		html.push(
		// 		(
		// 			<li key={index}>
		// 				<NavLink to={"/app/" + path}
		// 					="active"
		// 				>
		// 					{title}
		// 					<div className="indicator" />
		// 				</NavLink>
		// 			</li>
		// 		));
		// 	});
		// 	return html;
		// }


  buildSubMenus = props => {
		console.log('%c PROPS at Navbar', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
		// pageView={this.state.pageView}
  }


  render() {
		const menuItem = this.state.pageView;
    return (
      <div className="menu-container">
				<div className="menu">
					<ul>
						{this.navigationHtml()}

					</ul>
					<MenuBoxSmall
						menuItem={menuItem}
					/>

				</div>
      </div>
    );
  }
}

export default withRouter(Menubar);
