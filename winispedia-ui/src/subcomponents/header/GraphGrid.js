import styled from "styled-components";

export default styled.div`
	display: grid;
	grid-template-columns: ${
		props => (
			props.schoolWinPercent + "%" + props.tiesPercent + "%" + props.matchupSchoolWinPercent + "%"
		)
	};
	grid-template-rows: 2em;
`;