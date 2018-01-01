import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.a`
	align-self: center;
	display: block;
	font-family: 'Gudea', sans-serif;
	font-size: 4vw;
	font-weight: 900;
	text-decoration:  none;

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
