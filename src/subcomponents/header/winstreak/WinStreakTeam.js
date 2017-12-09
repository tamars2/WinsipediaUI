import styled from "styled-components";

export default styled.span`
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column: 1;		
	font-size: 4vw;
	text-align: center;
	align-self: center;
	font-family: 'Gudea', sans-serif;
	color: ${
		props => (
			props.winStreakSchoolColor
		)
	};	
	font-weight: bold;
	`;