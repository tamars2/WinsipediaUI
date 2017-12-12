import React, { Component } from 'react';

import MatchupStyle from './MatchupStyle.js';

import { ViewContainerFrame } from '../../components';
import { MatchupHeader } from '../../../components';
import { MatchupFooter } from '../../../components';
import { DottedLine } from '../../../subcomponents/common/DottedLine.js'

export class Matchup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data": {
        "team": {
          "SchoolName": "Georgia Tech",
          "SchoolSlug": "georgia-tech",
          "MatchupSlug": "alabama",
          "Branding": {
            "HexColor": "#b39454"
          },
          "Matchup": {
            "Wins": 21,
            "Ties": 3,
            "Losses": 28,
            "WinStreakSchool": "Georgia Tech",
            "WinStreak": 1,
            "WinStreakYears": "1984",
            "WinStreakSchoolColor": "#b39454",
            "WinPercent": 0.43269230769231,
            
            "MatchupTeam": {
              "SchoolName": "Alabama",
              "Branding": {
                "HexColor": "#a32136"
              },
              "Matchup": {
                "Wins": 28,
                "WinPercent": 0.56730769230769
              }
            }
          }
        }
      }
    }
  }
 
	render() {
		return (
      <ViewContainerFrame>
        <MatchupStyle>
          <MatchupHeader matchUpData = {this.state}/>
          <DottedLine/>	
          <MatchupFooter matchUpData = {this.state}/>
        </MatchupStyle>  
      </ViewContainerFrame>
		)
	}
}
