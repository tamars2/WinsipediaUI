import React, { Component } from 'react';

import WinLossBarGrid from "./WinLossBarGrid.js"
import TiesBar from "./TiesBar.js"
import SchoolWinsBar from "./SchoolWinsBar.js"
import MatchupSchoolWinsBar from "./MatchupSchoolWinsBar.js"

export class WinLossBar extends Component {
	
	componentWillMount(){
		let totalGames = (this.props.schoolWins + this.props.ties + this.props.matchupWins)
		
		this.setState({
			schoolWinPercent: (this.props.schoolWins / totalGames)*100,
			TiesPercent: (this.props.ties / totalGames)*100,
			matchupSchoolWinPercent: (this.props.matchupWins / totalGames)*100,
			schoolColor: this.props.schoolColor,
			matchupSchoolColor: this.props.matchupSchoolColor,
		});
	}  

  render() {
    return (
			<WinLossBarGrid schoolWinPercent={this.state.schoolWinPercent} tiesPercent = {this.state.TiesPercent} matchupSchoolWinPercent = {this.state.matchupSchoolWinPercent}>
				<SchoolWinsBar schoolColor={this.state.schoolColor}></SchoolWinsBar>
				<TiesBar></TiesBar>
				<MatchupSchoolWinsBar matchupSchoolColor={this.state.matchupSchoolColor}></MatchupSchoolWinsBar>
			</WinLossBarGrid>
    )
  }

}
