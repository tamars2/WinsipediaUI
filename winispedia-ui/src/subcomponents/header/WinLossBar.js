import React, { Component } from 'react';

import GraphGrid from "./GraphGrid.js"
import TiesBar from "./TiesBar.js"
import SchoolWinsBar from "./SchoolWinsBar.js"
import MatchupSchoolWinsBar from "./MatchupSchoolWinsBar.js"

export class WinLossBar extends Component {
	
	componentWillMount(){
		let totalGames = (this.props.schoolWins + this.props.ties + this.props.matchupWins)
		let schoolWinPercent = (this.props.schoolWins / totalGames)*100
		let TiesPercent = (this.props.ties / totalGames)*100
		let matchupSchoolWinPercent = (this.props.matchupWins / totalGames)*100
		let schoolColor = this.props.schoolColor
		let matchupSchoolColor = this.props.matchupSchoolColor

		this.setState({
			schoolWinPercent: schoolWinPercent,
			TiesPercent: TiesPercent,
			matchupSchoolWinPercent: matchupSchoolWinPercent,
			schoolColor: schoolColor,
			matchupSchoolColor: matchupSchoolColor,
		});
	}  

  render() {
    return (
			<GraphGrid schoolWinPercent={this.state.schoolWinPercent} tiesPercent = {this.state.TiesPercent} matchupSchoolWinPercent = {this.state.matchupSchoolWinPercent}>
				<SchoolWinsBar schoolColor={this.state.schoolColor}></SchoolWinsBar>
				<TiesBar></TiesBar>
				<MatchupSchoolWinsBar matchupSchoolColor={this.state.matchupSchoolColor}></MatchupSchoolWinsBar>
			</GraphGrid>
    )
  }

}
