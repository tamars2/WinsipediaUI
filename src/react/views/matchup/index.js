import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ViewContainerFrame } from '../../components';
import { MatchupHeader } from '../../components';
import { MatchupFooter } from '../../components';




const myQuery = gql`query {
  team(School: "georgia-tech", Matchup: "alabama") {
    SchoolName
    SchoolSlug
    MatchupSlug
    Branding {
      HexColor
    }
    Matchup {
      Wins
      Ties
      Losses
      WinPercent
      MatchupTeam {
        SchoolName
        Branding {
          HexColor
        }
        Matchup {
          Wins
          WinPercent
        }
      }
    }
  }
  }`;

const MyComponentWithData = graphql(myQuery)(props => 
    <ViewContainerFrame>
      <MatchupHeader matchUpData = {props}/>
      {/* <MatchupFooter matchUpData = {props}/> */}
    </ViewContainerFrame>
);

export class Matchup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     "data": {
  //       "team": {
  //         "SchoolName": "Georgia Tech",
  //         "SchoolSlug": "georgia-tech",
  //         "MatchupSlug": "alabama",
  //         "Branding": {
  //           "HexColor": "#b39454"
  //         },
  //         "Matchup": {
  //           "Wins": 21,
  //           "Ties": 3,
  //           "Losses": 28,
  //           "WinStreakSchool": "Georgia Tech",
  //           "WinStreak": 1,
  //           "WinStreakYears": "1984",
  //           "WinStreakSchoolColor": "#b39454",
  //           "WinPercent": 0.43269230769231,
            
  //           "MatchupTeam": {
  //             "SchoolName": "Alabama",
  //             "Branding": {
  //               "HexColor": "#a32136"
  //             },
  //             "Matchup": {
  //               "Wins": 28,
  //               "WinPercent": 0.56730769230769
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

	render() {
		return (

      <MyComponentWithData>

      </MyComponentWithData>

		)
	}
}

