// import {zip} from 'lodash.zip';
import {zip} from 'lodash';

export const topMenuLinks = ['feature', 'highlights', 'students', 'faculty', 'overview', 'alumni'];
export const topMenuLabels = ['From the Chairman', 'Faculty Highlights', 'Students & Teaching', 'Faculty', 'Department Overview', 'Alumni & Partnershipts'];
export const topMenu = zip(topMenuLinks, topMenuLabels);



const logos = {
  "uclabottom": "public/img/UCLA_bottom_600.svg",
  "uclaeceblue": "public/img/UCLA_ECE.svg",
  "uclaecewhite": "public/img/UCLA_ECE_WHITE.svg",
  "ecewhite": "public/img/ECE_WHITE.svg",
  "ece": "public/img/ECE.svg",
};