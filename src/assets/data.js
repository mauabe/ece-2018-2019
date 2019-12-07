// import {zip} from 'lodash.zip';
import {zip} from 'lodash';
// import * as data from '../assets/data'

export const topMenuLinks = ['features', 'highlights', 'students', 'faculty', 'overview', 'alumni'];
export const topMenuLabels = ['Department News', 'Faculty Highlights', 'Students & Teaching', 'ECE Faculty', 'Department Overview', 'Alumni & Partnerships'];
export const topMenu = zip(topMenuLinks, topMenuLabels);

export const subMenus = {
  'features': [],
  'highlights': [],
  'students': [],
  'faculty':[],
  'overview':[],
  'alumni':[]
}

export const logos = {
  "uclabottom": "public/img/UCLA_bottom_600.png",
  "uclaeceblue": "public/img/UCLA_ECE.png",
  "uclaecewhite": "public/img/UCLA_ECE_WHITE.svg",
  "ecewhite": "public/img/ECE_WHITE.svg",
  "ece": "public/img/ECE.png",
};
