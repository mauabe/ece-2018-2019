import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export const articlesOverview = [
  {
    articleId: 'researchcenters',
    professorTitle: 'Research ',
    professorFirstName: 'Ben',
    professorLastName: 'Hogan',
    professorName: 'Centers',
    articleAbrevTitle:'Ben Hogan and the Centers',
    articleDescription: 'How one man made his swing part of golf history',
    articleHeadline:'Ben Hogan, the swing of history.',
    articleSubhead: 'Revolutionary swing, maybe not',
    articleCallout1: '',
    articleCallout2: '',
    articleImage1: '/img/hogan.jpg',
    articleImage2: '/img/hogan6.jpg',
    articleImage3: '/img/hogan5.jpg',
    articleImage4: '',
    articleImage5: '',
    articleImage6: '',
    articleImageAltText1: 'Hogan set the stage for a generation',
    articleImageAltText2: 'After his accident, his putting was compromised',
    articleImageAltText3: 'The Hogan\'s fade',
    articleImageAltText4: 'Hogan\'s mentor kinesiology',
    articleImageAltText5: '',
    articleImageAltText6: '',
    articleImageMain: '/img/cnsi.jpg',
    articleImageAltTextMain: 'cnsi',
    articleImageProf: '',
    articleImageAltTextProf: '',
    articleImageCred: '',
    articleAuthor: '',
    articleCaption1: '',
    articleCaption2: '',
    articleCaption3: '',
    textCopy: 'In 1950, Ben Hogan played golf with Mike Austin at Riviera Country Club. Mr. Austin was known primarily as a famous long baller, having hit a 515-yard drive in a regular PGA tour event, which stands as a Guinness Book world record even today. Austin was also known as an instructor of some repute. His knowledge of the mechanics of the golf swing and kinesiology in particular is famous and quite astounding. He could speak. /r  In 1950, Ben Hogan played golf with Mike Austin at Riviera Country Club. Mr. Austin was known primarily as a famous long baller, having hit a 515-yard drive in a regular PGA tour event, which stands as a Guinness Book world record even today.it a 515-yard drive in a regular PGA tour event, which stands as a Guinness Book world record even today. Austin was also known as an instructor of some repute. His knowledge of the mechanics of the golf swing and kinesiology in particular is famous and quite astounding. He could speak. /r  In 1950, Ben Hogan played golf with Mike Austin at Riviera Country Club. Mr. Austin was known primarily as a famous long baller, having hit a 515-yard drive in a regular PGA tour event, which stands as a Guinness Book world record even today. Austin was also known as an instructor of some repute. His knowledge of the mechanics of the golf swing and kinesiology in particular is famous and quite astounding. He could speak.'
  },
  {
    articleId: 'facultystaff',
    professorTitle: 'Department Overview',
    professorFirstName: '',
    professorLastName: '',
    professorName: '',
    articleAbrevTitle:'Faculty and Staff',
    articleDescription: '',
    articleHeadline:'',
    articleSubhead: '',
    articleCallout1: '',
    articleCallout2: '',
    articleImage1: '',
    articleImage2:'',
    articleImage3: '',
    articleImage4:'',
    articleImage5: '',
    articleImage6: '',
    articleImageAltText1: '',
    articleImageAltText2: '',
    articleImageAltText3: '',
    articleImageAltText4: '',
    articleImageAltText5: '',
    articleImageAltText6: '',
    articleImageMain: '/img/hogan.jpg',
    articleImageAltTextMain: 'UCLA Samueli School of Engineering',
    articleImageProf: '/img/hogan.jpg',
    articleImageAltTextProf: '',
    articleImageCred: '',
    articleAuthor: '',
    articleCaption1: '',
    articleCaption2: '',
    articleCaption3: '',
    textCopy: '<FacultyStaff />'

  },
];

const cars = [
	{ brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
	{ brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
	{ brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
	{ brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
	{ brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34' },
	{ brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
	{ brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
	{ brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34' },
	{ brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
	{ brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' }
];


export class FacultyStaff extends Component {
  constructor() {
      super();
      this.state = {};
      this.facultyStaff = {
        "Ladder Faculty": 48,
        "Courtesy Appointments": 14,
        "Emeriti Faculty": 14,
        "Adjunct Faculty":	4,
        "Lecturers": 9,
        "Post-Doc":	40,
        "Staff":43
      };

      this.playersYears =
      [
        {
        "PlayerName": "AFFRUNTI, JOE",
        "PGASeason": 2016
        },
        {
        "PlayerName": "AIKEN, THOMAS",
        "PGASeason": 2017
        },
        {
        "PlayerName": "AIKEN, THOMAS",
        "PGASeason": 2016
        },
        {
        "PlayerName": "AKIYOSHI, SHOTA",
        "PGASeason": 2018
        },
        {
        "PlayerName": "ALBERTSON, ANDERS",
        "PGASeason": 2019
        },
        {
        "PlayerName": "ALDRIDGE, TYLER",
        "PGASeason": 2016
        }
      ]
  }

  render() {
    return (
      <div style={{ width: 500 }}>
      <DataTable value={cars}>
        <Column field='vin' header='Vin' />
        <Column field='year' header='Year' />
        <Column field='brand' header='Brand' />
        <Column field='color' header='Color' />
      </DataTable>
      </div>
    );
  }
}


// export default (
// 	<div style={{ width: 500 }}>
// 		<PrimereactStyle />
// 		<DataTable value={cars}>
// 			<Column field='vin' header='Vin' />
// 			<Column field='year' header='Year' />
// 			<Column field='brand' header='Brand' />
// 			<Column field='color' header='Color' />
// 		</DataTable>
// 	</div>
// );