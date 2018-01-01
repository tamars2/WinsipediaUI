import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.a`
	align-self: center;
	display: block;
	font-family: 'Gudea', sans-serif;
	font-size: 3vw;
	font-weight: 535;
`

export class MatchupLink extends Component {

  render() {
    return (
        <Wrapper 
				href={"http://www.winsipedia.com/" + this.props.schoolSlug + "/vs/" + this.props.matchupSchoolSlug}>
				Full Matchup Page >
				</Wrapper>
    )
  }

}
