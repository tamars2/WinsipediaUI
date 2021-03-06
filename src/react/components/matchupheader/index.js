import React, { Component } from 'react'
import styled from "styled-components"

import { TeamLogo } from '../../subcomponents/'
import { Ties } from '../../subcomponents/'
import { Wins } from '../../subcomponents/'
import { WinLossBar } from '../../subcomponents/'
import { WinStreak } from '../../subcomponents/'
import { DottedLine } from '../../subcomponents/'

const Wrapper = styled.div`

`;

const HeaderContent = styled.div`
display: grid;
grid-template-columns: 17% 1fr 34% 1fr 17%;
grid-template-rows: 100% 100% 100% 100% 100%;
min-height: 37.5vw;
`

const NoMatchupHeaderContent = styled.div`
display: grid;
grid-template-columns: 30% 1fr 34% 1fr 30%;
grid-template-rows: 100% 100% 100% 100% 100%;
min-height: 37.5vw;
`

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
grid-row-start: 3;
grid-row-end: 5;
grid-column-start: 1;
grid-column-end: 6;	
text-align: center;	
align-self: center;
font-family: 'Gudea', sans-serif;
font-size: 5vw;
height: 3vw;
color: #aaa;
`;

const Loading = styled.img`
grid-row-start: 1;
grid-row-end: 5;
grid-column-start: 1;
grid-column-end: 6;	
display: block;
margin: 0 auto;

`

export class MatchupHeader extends Component {
	constructor(props) {
		super(props)
		this.loadHeader = this.loadHeader.bind(this)
		this.loadWinStreak = this.loadWinStreak.bind(this)

	}
	loadWinStreak() {
		const { matchUpData } = this.props
		
		if (matchUpData.data.team.Matchup.WinStreakEndYear > matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear) {
			let winStreakYears = matchUpData.data.team.Matchup.WinStreakStartYear.concat("-", matchUpData.data.team.Matchup.WinStreakEndYear)
			return (
				<WinStreak
					winStreak={matchUpData.data.team.Matchup.WinStreakLength} 
					winStreakSchool={matchUpData.data.team.SchoolName} 
					winStreakYears={winStreakYears} 
					winStreakSchoolColor={matchUpData.data.team.Branding.HexColor}                
				/>
			)
		}
		else  if (matchUpData.data.team.Matchup.WinStreakEndYear < matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear) {
			let winStreakYears = matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakStartYear.concat("-", matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakEndYear)
			return (
				<WinStreak
					winStreak={matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinStreakLength} 
					winStreakSchool={matchUpData.data.team.Matchup.MatchupTeam.SchoolName} 
					winStreakYears={winStreakYears} 
					winStreakSchoolColor={matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}                
				/>
			)
		}
		else {
			return (
				<NoPreviousMatchups>NEITHER TEAM HOLDS A WIN STREAK</NoPreviousMatchups>
			)
		}
	}
	loadHeader() {
		const { matchUpData } = this.props

		if (matchUpData.data.loading) {
			return (
				<Wrapper>
					<Loading src={require("../../../media/images/loading.gif")} alt="loading">
					</Loading>
				</Wrapper>
			)
		}
		else if (typeof matchUpData.data.error === "undefined") {
			if ((matchUpData.data.team.Matchup.Wins + matchUpData.data.team.Matchup.Ties + matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins) > 0)  {
				return (
					<Wrapper>
						<HeaderContent>
						<SchoolLogoPosition>
							<TeamLogo  
								slug={matchUpData.data.team.SchoolSlug}
								school={matchUpData.data.team.SchoolName}
							/>
						</SchoolLogoPosition>
						<SchoolWinsPosition>
						<Wins 
							wins={matchUpData.data.team.Matchup.Wins} 
							percent={matchUpData.data.team.Matchup.WinPercent}
						/>
						</SchoolWinsPosition>
							<TiesPosition>
								<Ties 
									ties={matchUpData.data.team.Matchup.Ties}
								/>
							</TiesPosition>
						<MatchupSchoolWinsPosition>
						<Wins 
							wins={matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins} 
							percent={matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinPercent}
						/>
						</MatchupSchoolWinsPosition>
						<MatchupSchoolLogoPosition>
							<TeamLogo 
								slug={matchUpData.data.team.MatchupSlug}
								school={matchUpData.data.team.Matchup.MatchupTeam.SchoolName}
							/>
						</MatchupSchoolLogoPosition>
						<WinLossBarPosition>
							<WinLossBar 
								schoolColor={matchUpData.data.team.Branding.HexColor} 
								matchupSchoolColor={matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} 
								schoolWins={matchUpData.data.team.Matchup.Wins} 
								ties={matchUpData.data.team.Matchup.Ties} 
								matchupWins={matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins}
							/>
						</WinLossBarPosition>
						<WinStreakPosition>
							{ this.loadWinStreak() }
						</WinStreakPosition>
						</HeaderContent>
						<DottedLine/>
					</Wrapper>
				)
			}
			else {
				return (
					<Wrapper>
						<NoMatchupHeaderContent>
						<SchoolLogoPosition>
							<TeamLogo  
								slug={matchUpData.data.team.SchoolSlug}
								school={matchUpData.data.team.SchoolName}
							/>
						</SchoolLogoPosition>
						<NoPreviousMatchups>NO PREVIOUS MATCHUPS</NoPreviousMatchups>
						<MatchupSchoolLogoPosition>
							<TeamLogo 
								slug={matchUpData.data.team.MatchupSlug}
								school={matchUpData.data.team.Matchup.MatchupTeam.SchoolName}
							/>
						</MatchupSchoolLogoPosition>
						</NoMatchupHeaderContent>
						<DottedLine/>
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
			<div> { this.loadHeader() } </div>
		)
	}
}

