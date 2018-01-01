import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { ViewContainerFrame } from '../../components';
import { MatchupHeader } from '../../components';
import { MatchupFooter } from '../../components';
import { MatchupBody } from '../../components';


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
        AllTimeRankings {
          AllTimeRecordPercent
          AllTimeRecordRank
          NationalChampData
          NationalChampRank
          ConferenceChampData
          ConferenceChampRank
          BowlGameData
          BowlGameRank
          WinData
          WinRank
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
            AllTimeRankings {
              AllTimeRecordPercent
              AllTimeRecordRank
              NationalChampData
              NationalChampRank
              ConferenceChampData
              ConferenceChampRank
              BowlGameData
              BowlGameRank
              WinData
              WinRank
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

    const MyComponentWithDataVerbose = graphql(getMatchup, {
      options: { 
        variables: { 
          schoolSlug: this.props.schoolSlug,
          matchupSchoolSlug: this.props.matchupSchoolSlug,
         } },
    })(props => 
          <ViewContainerFrame>
            <MatchupHeader matchUpData = {props}/>
            <MatchupBody matchUpData = {props}/>
            <MatchupFooter matchUpData = {props}/>
          </ViewContainerFrame>

    );
    console.log(this.props.verbose)
    if (this.props.verbose === "true") {
      return (
        <MyComponentWithDataVerbose>
        </MyComponentWithDataVerbose>
      )
    }
    else {
      return (
        <MyComponentWithData>
        </MyComponentWithData>
      )
    }
	}
	render() {
		return (
      <div>
        <style>@import url('https://fonts.googleapis.com/css?family=Ultra')</style>
        <style>@import url('https://fonts.googleapis.com/css?family=Gudea')</style>
        {this.loadMatchup()}
      </div>
		)
	}
}

