import React, { Component } from 'react'
import styled from "styled-components"

const TeamLogos = styled.img`
	align-self: center;
	display: block;
	width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1vw;

`
export class TeamLogo extends Component {
  render() {
    return (
        <TeamLogos
          src={require('../../../media/images/Team_logos/' + this.props.slug + '.240.png')}
          alt={this.props.school}>
        </TeamLogos>
    )
  }
}
