import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';


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
render () {
  return(
    <div>
      Hello!
    </div>
  )
}

}

// Recognitions
// Society Fellows 	49
// NAE Members 	18
// NAS Members	3
// National Academy of Inventors 	8
// Marconi Prize 	1