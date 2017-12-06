import styled from "styled-components";

export default styled.div`
	grid-area: 1 1;		
	background: ${
		props => (
			props.schoolColor
		)
	};
`;