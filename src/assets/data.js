// import {zip} from 'lodash.zip';
import {zip} from 'lodash';
import * as data from '../assets/data'

export const topMenuLinks = ['features', 'highlights', 'students', 'faculty', 'overview', 'alumni'];
export const topMenuLabels = ['From the Chairman', 'Faculty Highlights', 'Students & Teaching', 'Faculty & Staff', 'Department Overview', 'Alumni & Partnerships'];
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

//moved to individual article... {file}.js

// export const articles = [
//   {
//     articleAbrevTitle:'articleAbrevTitle',
//     articleImage:'articleImage',
//     articleDescription: 'articleDescription',
//     articleMenu:'articleMenu',
//     articleHeadline:'article headline',
//     articleSubhead: 'subhead here',
//     articleCallout1: 'Great Callout here',
//     articleCallout2: 'Great Callout2 here',
//     professorTitle: 'Professor',
//     professorFirstName: 'Fistname H. G.',
//     professorLastName: 'LastName',
//     professorName: 'Fistname H. G. Lastname',
//     textCopy: 'text copy goes here ... and here ... and here'
//   }
// ];
// export const images = {
//   'features': { prof1: ['assets.image/faculty/prof1a.png','assets.image/faculty/prof1b.png' ]},
//   'highlights': { prof1: ['assets.image/highlights/prof1a.png','assets.image/highlights/prof1b.png' ]},
//   'students': { article1: ['assets.image/students/stud1a.png','assets.image/students/stud1b.png' ]},
//   'faculty': { prof3: ['assets.image/faculty/prof3a.png','assets.image/faculty/prof3b.png' ]},
//   'overview': { article1: ['assets.image/overview/article1a.png','assets.image/overview/article1b.png' ]},
//   'alumni': { alumni3: ['assets.image/alumni/article3a.png','assets.image/alumni/article3b.png' ]},
// }