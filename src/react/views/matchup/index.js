import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ViewContainerFrame } from '../../components';
import { MatchupHeader } from '../../components';
import { MatchupFooter } from '../../components';

export class Matchup extends Component {

  loadMatchup() {
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

