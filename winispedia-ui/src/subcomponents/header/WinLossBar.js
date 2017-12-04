import React, { Component } from 'react';

export class WinLossBar extends Component {
	
	componentWillMount(){
		const barClass = {
			"display": "inline-block",
			"height":"100%",
		}

		const schoolClass = {
			background: this.props.schoolColor,
			"width": (this.props.schoolWins / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "%",
		}

		const tieClass = {
			background: "#bbb",
			"width": (this.props.ties / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "%",				
		}

		const matchupSchoolClass = {
			background: this.props.matchupSchoolColor,
			"width": (this.props.matchupWins / (this.props.schoolWins + this.props.ties + this.props.matchupWins))*100 + "%",				
		}

		const stackedBarGraphClass = {
			"width": "100%",
			"height": "30px",
		}

		this.setState({
			schoolBar: Object.assign(schoolClass, barClass),
			tieBar: Object.assign(tieClass, barClass),
			matchupSchoolBar: Object.assign(matchupSchoolClass, barClass),
			stackedBarGraph: stackedBarGraphClass
		});
	}  

  render() {
    return (
			<div style={this.state.stackedBarGraph}>
				<span style={this.state.schoolBar}></span>
				<span style={this.state.tieBar}></span>
				<span style={this.state.matchupSchoolBar}></span>
			</div>
    )
  }

}
