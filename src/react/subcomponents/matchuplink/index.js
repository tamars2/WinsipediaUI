import React, { Component } from 'react';
import styled from "styled-components";

const MatchupLinks = styled.a`
	align-self: center;
	display: block;
	font-family: 'Gudea', sans-serif;
	font-size: 20px;
	font-weight: 535;
`

export class MatchupLink extends Component {

  render() {
    return (
        <MatchupLinks 
				href={"http://www.winsipedia.com/" + this.props.schoolSlug + "/vs/" + this.props.matchupSchoolSlug}>
				Full Matchup Page >
				</MatchupLinks>
    )
  }

}
