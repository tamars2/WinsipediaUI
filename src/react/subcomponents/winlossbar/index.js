import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: ${
		props => {
			if (props.schoolWinPercent + props.tiesPercent + props.matchupSchoolWinPercent > 0) {
				return (
					props.schoolWinPercent + "%" + props.tiesPercent + "%" + props.matchupSchoolWinPercent + "%"
				)
			}
			else {
				return "0% 100% 0%"
			}
			}
	};
	grid-template-rows: 9vw;
`;



const SchoolWins = styled.div`
grid-area: 1 1;		
background: ${
	props => (
		props.schoolColor
	)
};
margin-right: 1px;
`;

const MatchupSchoolWins = styled.div`
grid-area: 1 3;		
background: ${
	props => (
		props.matchupSchoolColor
	)
};
`;

const Ties = styled.div`
grid-area: 1 2;		
background: #bbb;	
margin-right: 1px;
`;



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
			<Wrapper schoolWinPercent={this.state.schoolWinPercent} tiesPercent = {this.state.TiesPercent} matchupSchoolWinPercent = {this.state.matchupSchoolWinPercent}>
				<SchoolWins schoolColor={this.state.schoolColor}></SchoolWins>
				<Ties/>
				<MatchupSchoolWins matchupSchoolColor={this.state.matchupSchoolColor}></MatchupSchoolWins>
			</Wrapper>
    )
  }

}
