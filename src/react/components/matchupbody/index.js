import { Component } from 'react'
import styled from "styled-components"

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
			if (percent==="1.000" || percent==="0.000") {
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
		if (this.props.matchUpData.data.loading) {
			return (
				<Wrapper>
					<div></div>
				</Wrapper>
			)
		}
		else if (typeof this.props.matchUpData.data.error === "undefined") {
			let schoolAllTimeRecordPercent = (this.formatPercent(this.props.matchUpData.data.team.AllTimeRankings.AllTimeRecordPercent))
			let matchupSchoolAllTimeRecordPercent = (this.formatPercent(this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.AllTimeRecordPercent))
			return (
				<Wrapper>
					<MatchupBodyRow schoolRank = {this.props.matchUpData.data.team.AllTimeRankings.AllTimeRecordRank} schoolData = {schoolAllTimeRecordPercent} schoolColor = {this.props.matchUpData.data.team.Branding.HexColor} matchupSchoolRank = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.AllTimeRecordRank} matchupSchoolData = {matchupSchoolAllTimeRecordPercent} matchupSchoolColor = {this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} label = "ALL-TIME RECORD"/>
					<DottedLine/>
					<MatchupBodyRow schoolRank = {this.props.matchUpData.data.team.AllTimeRankings.NationalChampRank} schoolData = {this.props.matchUpData.data.team.AllTimeRankings.NationalChampData} schoolColor = {this.props.matchUpData.data.team.Branding.HexColor} matchupSchoolRank = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.NationalChampRank} matchupSchoolData = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.NationalChampData} matchupSchoolColor = {this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} label = "NATIONAL CHAMPIONSHIPS"/>
					<DottedLine/>
					<MatchupBodyRow schoolRank = {this.props.matchUpData.data.team.AllTimeRankings.ConferenceChampRank} schoolData = {this.props.matchUpData.data.team.AllTimeRankings.ConferenceChampData} schoolColor = {this.props.matchUpData.data.team.Branding.HexColor} matchupSchoolRank = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.ConferenceChampRank} matchupSchoolData = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.ConferenceChampData} matchupSchoolColor = {this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} label = "CONFERENCE CHAMPIONSHIPS"/>
					<DottedLine/>
					<MatchupBodyRow schoolRank = {this.props.matchUpData.data.team.AllTimeRankings.BowlGameRank} schoolData = {this.props.matchUpData.data.team.AllTimeRankings.BowlGameData} schoolColor = {this.props.matchUpData.data.team.Branding.HexColor} matchupSchoolRank = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.BowlGameRank} matchupSchoolData = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.BowlGameData} matchupSchoolColor = {this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} label = "BOWL GAMES"/>
					<DottedLine/>
					<MatchupBodyRow schoolRank = {this.props.matchUpData.data.team.AllTimeRankings.WinRank} schoolData = {this.props.matchUpData.data.team.AllTimeRankings.WinData} schoolColor = {this.props.matchUpData.data.team.Branding.HexColor} matchupSchoolRank = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.WinRank} matchupSchoolData = {this.props.matchUpData.data.team.Matchup.MatchupTeam.AllTimeRankings.WinData} matchupSchoolColor = {this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor} label = "WINS ALL-TIME"/>
					<DottedLine/>
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


