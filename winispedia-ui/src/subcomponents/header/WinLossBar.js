import React, { Component } from 'react';

export class WinLossBar extends Component {
	
	componentWillMount(){
		const grid = {
			display: "grid",
			"gridTemplateColumns": (this.props.schoolWins / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "% " + (this.props.ties / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "% " + (this.props.matchupWins / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "%",
			"gridTemplateRows": "2em",			
		}

		const schoolWins = {
			gridArea: "1 1",
			background: this.props.schoolColor,			
		}

		const ties = {
			gridArea: "1 2",			
			background: "#bbb",			
		}

		const matchupWins = {
			gridArea: "1 3",			
			background: this.props.matchupSchoolColor,			
		}

		this.setState({
			grid: grid,
			schoolWins: schoolWins,
			ties: ties,
			matchupWins: matchupWins,
		});
	}  

  render() {
    return (
			<div style={this.state.grid}>
				<div style={this.state.schoolWins}></div>
				<div style={this.state.ties}></div>
				<div style={this.state.matchupWins}></div>
			</div>
    )
  }

}
