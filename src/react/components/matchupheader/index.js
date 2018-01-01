import React, { Component } from 'react';
import styled from "styled-components";

import { TeamLogo } from '../../subcomponents/';
import { Ties } from '../../subcomponents/';
import { Wins } from '../../subcomponents/';
import {WinLossBar} from '../../subcomponents/';
import {WinStreak} from '../../subcomponents/';
import { DottedLine } from '../../subcomponents/';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 17% 1fr 34% 1fr 17%;
grid-template-rows: 100% 100% 100% 100% 100%;
`;

const SchoolLogoPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 1;
align-self: center;
`;

const SchoolWinsPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 2;		
align-self: center;
`;

const TiesPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 3;		
align-self: center;
`;

const MatchupSchoolWinsPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 4;	
align-self: center;
`;

const MatchupSchoolLogoPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 5;		
align-self: center;
`;

const DottedLinePosition = styled.div`
grid-column-start: 1;
grid-column-end: 6;		
grid-row: 6	;		
align-self: center;
`;

const WinLossBarPosition = styled.div`
grid-row: 3;
grid-column-start: 2;
grid-column-end: 5;		
align-self: center;
margin-top: -3vw	;
`;

const WinStreakPosition = styled.div`
grid-row: 5;
grid-column-start: 1;
grid-column-end: 6;		
align-self: center;
margin-top: 6vw;
text-align: center;
padding-bottom: 2vw;
`;

const NoPreviousMatchups = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 6;	
text-align: center;	
align-self: center;
font-family: 'Gudea', sans-serif;
font-size: 5vw;
height: 3vw;
color: #aaa;
`;

export class MatchupHeader extends Component {
	constructor(props) {
			super(props)
			this.loadHeader = this.loadHeader.bind(this)
			this.loadWinStreak = this.loadWinStreak.bind(this)

	}
	loadWinStreak() {
		if (this.props.matchUpData.data.team.Matchup.WinStreakEndYear > this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear) {
			let winStreakYears = this.props.matchUpData.data.team.Matchup.WinStreakStartYear.concat("-", this.props.matchUpData.data.team.Matchup.WinStreakEndYear)
			return (
				<WinStreak
					winStreak={this.props.matchUpData.data.team.Matchup.WinStreakLength} 
					winStreakSchool={this.props.matchUpData.data.team.SchoolName} 
					winStreakYears={winStreakYears} 
					winStreakSchoolColor={this.props.matchUpData.data.team.Branding.HexColor}                
				/>
			)
		}
		else  if (this.props.matchUpData.data.team.Matchup.WinStreakEndYear < this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear) {
			let winStreakYears = this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakStartYear.concat("-", this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear)
			return (
				<WinStreak
					winStreak={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakLength} 
					winStreakSchool={this.props.matchUpData.data.team.Matchup.MatchupTeam.SchoolName} 
					winStreakYears={winStreakYears} 
					winStreakSchoolColor={this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}                
				/>
			)
		}
		else {
			return (
				<div/>
			)
		}
	}
	loadHeader() {
		if (this.props.matchUpData.data.loading) {
			return (
				<Wrapper>
					<div>Loading</div>
				</Wrapper>
			)
		}
		else if (typeof this.props.matchUpData.data.error === "undefined") {
			if (this.props.matchUpData.data.team.Matchup.WinStreakEndYear !== this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear) {
				return (
					<Wrapper>
						<SchoolLogoPosition>
							<TeamLogo  
								slug={this.props.matchUpData.data.team.SchoolSlug}
								school={this.props.matchUpData.data.team.SchoolName}
							/>
						</SchoolLogoPosition>
						<SchoolWinsPosition>
						<Wins 
							wins={this.props.matchUpData.data.team.Matchup.Wins} 
							percent={this.props.matchUpData.data.team.Matchup.WinPercent}
						/>
						</SchoolWinsPosition>
							<TiesPosition>
								<Ties 
									ties={this.props.matchUpData.data.team.Matchup.Ties}
								/>
							</TiesPosition>
						<MatchupSchoolWinsPosition>
						<Wins 
							wins={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins} 
							percent={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinPercent}
						/>
						</MatchupSchoolWinsPosition>
						<MatchupSchoolLogoPosition>
							<TeamLogo 
								slug={this.props.matchUpData.data.team.MatchupSlug}
								school={this.props.matchUpData.data.team.Matchup.MatchupTeam.SchoolName}
							/>
						</MatchupSchoolLogoPosition>
						<WinLossBarPosition>
							<WinLossBar 
								schoolColor={this.props.matchUpData.data.team.Branding.HexColor} 
								matchupSchoolColor={this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} 
								schoolWins={this.props.matchUpData.data.team.Matchup.Wins} 
								ties={this.props.matchUpData.data.team.Matchup.Ties} 
								matchupWins={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins}
							/>
						</WinLossBarPosition>
						<WinStreakPosition>
							{this.loadWinStreak()}
						</WinStreakPosition>
						<DottedLinePosition>
							<DottedLine/>
						</DottedLinePosition>
					</Wrapper>
				)
			}
			else {
				return (
					<Wrapper>
						<SchoolLogoPosition>
							<TeamLogo  
								slug={this.props.matchUpData.data.team.SchoolSlug}
								school={this.props.matchUpData.data.team.SchoolName}
							/>
						</SchoolLogoPosition>
						<NoPreviousMatchups>NO PREVIOUS MATCHUPS</NoPreviousMatchups>
						<MatchupSchoolLogoPosition>
							<TeamLogo 
								slug={this.props.matchUpData.data.team.MatchupSlug}
								school={this.props.matchUpData.data.team.Matchup.MatchupTeam.SchoolName}
							/>
						</MatchupSchoolLogoPosition>
						<DottedLinePosition>
							<DottedLine/>
						</DottedLinePosition>
					</Wrapper>
				)
			}
		}
		else {
			return (
				<Wrapper>
					<div>So sad</div>
				</Wrapper>
			)
		}
		
	}
	render() {
    return (
    <div>{this.loadHeader()}</div>
		)
	}
}

