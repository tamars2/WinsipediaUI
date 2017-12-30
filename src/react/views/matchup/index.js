import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ViewContainerFrame } from '../../components';
import { MatchupHeader } from '../../components';
import { MatchupFooter } from '../../components';

export class Matchup extends Component {
  loadMatchup() {
		const getMatchup = gql`query Team($schoolSlug: String!,$matchupSchoolSlug: String!){
      team(School: $schoolSlug, Matchup: $matchupSchoolSlug) {
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
          WinStreakLength
          WinStreakEndYear
          WinStreakStartYear
          WinPercent
          MatchupTeam {
            SchoolName
            Branding {
              HexColor
            }
            Matchup {
              Wins
              WinPercent
              WinStreakLength
              WinStreakEndYear
              WinStreakStartYear
            }
          }
        }
      }
    }`;
    
    const MyComponentWithData = graphql(getMatchup, {
      options: { 
        variables: { 
          schoolSlug: this.props.schoolSlug,
          matchupSchoolSlug: this.props.matchupSchoolSlug,
         } },
    })(props => 
          <ViewContainerFrame>
            <MatchupHeader matchUpData = {props}/>
            <MatchupFooter matchUpData = {props}/>
          </ViewContainerFrame>

    );

    return (
      <MyComponentWithData>
      </MyComponentWithData>
    )
	}
	render() {
		return (
      <div>{this.loadMatchup()}</div>
		)
	}
}

