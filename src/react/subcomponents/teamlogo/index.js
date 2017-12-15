import React, { Component } from 'react';
import styled from "styled-components";

const TeamLogos = styled.img`
	align-self: center;
	display: block;
	width: 95%;
`
export class TeamLogo extends Component {

  render() {
    return (
        <TeamLogos src={require('../../../media/images/Team_logos/' + this.props.slug + '.240.png')} alt={this.props.school}></TeamLogos>
    )
  }

}
