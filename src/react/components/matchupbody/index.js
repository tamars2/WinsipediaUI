import React, { Component } from 'react';
import styled from "styled-components";

import { DottedLine } from '../../subcomponents/';
import { MatchupBodyRow } from '../../subcomponents/';

const Wrapper = styled.div`

`

export class MatchupBody extends Component {
    constructor(props) {
		super(props)
			this.loadBody = this.loadBody.bind(this)
			this.formatPercent = this.formatPercent.bind(this)
		}
		
		formatPercent(percent) {
			if (percent === '1.000' || percent === '0.000') {
				return (
					percent
				)
			}
			else {
				return (
					(percent.toString()).substring(1, 5)
				)
			}
		}

    loadBody() {
		const { matchUpData } = this.props

		if (matchUpData.data.loading) {
			return (
				<Wrapper>
					<div></div>
				</Wrapper>
			)
		}
		else if (typeof matchUpData.data.error === "undefined") {
			let schoolAllTimeRecordPercent = (this.formatPercent(matchUpData.data.team.AllTimeRankings.AllTimeRecordPercent))
			let matchupSchoolAllTimeRecordPercent = (this.formatPercent(matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.AllTimeRecordPercent))
			return (
				<Wrapper>
					<MatchupBodyRow
						schoolRank = {matchUpData.data.team.AllTimeRankings.AllTimeRecordRank} 
						schoolData = {schoolAllTimeRecordPercent} 
						schoolColor = {matchUpData.data.team.Branding.HexColor} 
						matchupSchoolRank = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.AllTimeRecordRank}
						matchupSchoolData = {matchupSchoolAllTimeRecordPercent}
						matchupSchoolColor = {matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} 
						label = "ALL-TIME RECORD"
					/>
					<DottedLine />
					<MatchupBodyRow
						schoolRank = {matchUpData.data.team.AllTimeRankings.NationalChampRank} 
						schoolData = {matchUpData.data.team.AllTimeRankings.NationalChampData}
						schoolColor = {matchUpData.data.team.Branding.HexColor}
						matchupSchoolRank = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.NationalChampRank}
						matchupSchoolData = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.NationalChampData}
						matchupSchoolColor = {matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}
						label = "NATIONAL CHAMPIONSHIPS"
					/>
					<DottedLine />
					<MatchupBodyRow
						schoolRank = {matchUpData.data.team.AllTimeRankings.ConferenceChampRank}
						schoolData = {matchUpData.data.team.AllTimeRankings.ConferenceChampData}
						schoolColor = {matchUpData.data.team.Branding.HexColor}
						matchupSchoolRank = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.ConferenceChampRank}
						matchupSchoolData = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.ConferenceChampData}
						matchupSchoolColor = {matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}
						label = "CONFERENCE CHAMPIONSHIPS"
					/>
					<DottedLine />
					<MatchupBodyRow
						schoolRank = {matchUpData.data.team.AllTimeRankings.BowlGameRank}
						schoolData = {matchUpData.data.team.AllTimeRankings.BowlGameData}
						schoolColor = {matchUpData.data.team.Branding.HexColor}
						matchupSchoolRank = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.BowlGameRank}
						matchupSchoolData = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.BowlGameData}
						matchupSchoolColor = {matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}
						label = "BOWL GAMES"
					/>
					<DottedLine />
					<MatchupBodyRow
						schoolRank = {matchUpData.data.team.AllTimeRankings.WinRank}
						schoolData = {matchUpData.data.team.AllTimeRankings.WinData}
						schoolColor = {matchUpData.data.team.Branding.HexColor}
						matchupSchoolRank = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.WinRank}
						matchupSchoolData = {matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.WinData}
						matchupSchoolColor = {matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor}
						label = "WINS ALL-TIME"
					/>
					<DottedLine />
			</Wrapper>
			)
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
    <div>{this.loadBody()}</div>
		)
	}
}


