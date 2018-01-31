import React, { Component } from 'react'
import styled from "styled-components"

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
		const {
			schoolWins,
			ties,
			matchupWins,
			schoolColor,
			matchupSchoolColor,
		} = this.props

		const totalGames = (schoolWins + ties + matchupWins)
		
		this.setState({
			schoolWinPercent: (schoolWins / totalGames)*100,
			TiesPercent: (ties / totalGames)*100,
			matchupSchoolWinPercent: (matchupWins / totalGames)*100,
			schoolColor: schoolColor,
			matchupSchoolColor: matchupSchoolColor,
		})
	}  

  render() {
	const {
		schoolWinPercent,
		TiesPercent,
		matchupSchoolWinPercent,
		schoolColor,
		matchupSchoolColor,
	} = this.state

    return (
			<Wrapper
				schoolWinPercent={schoolWinPercent}
				tiesPercent={TiesPercent}
				matchupSchoolWinPercent={matchupSchoolWinPercent}
			>
				<SchoolWins schoolColor={schoolColor}></SchoolWins>
				<Ties/>
				<MatchupSchoolWins matchupSchoolColor={matchupSchoolColor}></MatchupSchoolWins>
			</Wrapper>
    )
  }

}
