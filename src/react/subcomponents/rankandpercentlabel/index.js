import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
		text-align: center;
		font-family: 'Gudea', sans-serif;
		color: #38a0e8;
		font-size: 3.5vw
`

export class RankAndPercentLabel extends Component {

  render() {
    return (
        <Wrapper>
					{this.props.label}
				</Wrapper>
    )
  }

}
