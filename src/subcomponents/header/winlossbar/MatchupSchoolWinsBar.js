import styled from "styled-components";

export default styled.div`
	grid-area: 1 3;		
	background: ${
		props => (
			props.matchupSchoolColor
		)
	};
`;