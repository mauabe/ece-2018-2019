// import {zip} from 'lodash.zip';
import {zip} from 'lodash';
// import * as data from '../assets/data'

export const topMenuLinks = ['features', 'highlights', 'students', 'faculty', 'overview', 'alumni'];
export const topMenuLabels = ['Department News', 'Faculty Highlights', 'Students & Teaching', 'Faculty & Staff', 'Department Overview', 'Alumni & Partnerships'];
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

export const featuresLinks = ['chairman', 'aiello', 'linyang'];
export const featuresLabels = ['A Message', 'New Faculty: Aiello', 'New Faculty: linyang'];
export const featuresSubmenu = zip(featuresLinks, featuresLinks);

export const highlightsLinks = ['ieeefellows', 'ozcan', 'wong', 'candler', 'stafsudd', 'madni',  'rahmat-samii', 'frankchang', 'Emaminejad '];
export const highlightsLabels = ['ieeefellows', 'ozcan', 'wong', 'candler', 'stafsudd', 'madni',  'rahmat-samii', 'frankchang', 'Emaminejad '];
export const highlightsMenu = zip(highlightsLinks, highlightsLabels);


export const studentsLinks = ['awards', 'santos', 'studentcenters', 'studentinitiatives'];
export const studentsLabels = ['Student and Teaching Awards', 'J.P. Santos', 'Student Centers', 'Student Initiatives'];
export const studentsSubmenu = zip(studentsLinks, studentsLabels);

export const facultyLinks = ['ces', 'pwe', 'ss', 'academies'];
export const facultyLabels = ['Circuits & Embedded Systems', 'Physical & Wave Electronics', 'Signals & Systems', 'Members of National Academies'];
export const facultySubmenu = zip(facultyLinks, facultyLabels);

export const overviewLinks = ['researchcenters', 'facultystaff', 'studentbody', 'fellowships', 'applicants'];
export const overviewLabels = ['Research Centers', 'Faculty amd Staff', 'Student Body', 'Graduate Fellowships', 'Graduate Applicants'];
export const overviewSubmenu = zip(overviewLinks, overviewLabels);

export const alumniLinks = ['alumnae', 'alumni', 'partnerships'];
export const alumniLabels = ['Alumnae Advisory Committee', 'Alumni Advisory Board', 'Department Partnerships'];
export const alumniSubmenu = zip(alumniLinks, alumniLabels);