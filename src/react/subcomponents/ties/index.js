import React, { Component } from 'react';
import styled from "styled-components";

const Label = styled.div`
	grid-row-start: 1;
	grid-row-end: 3;
	grid-column: 2;
	font-size: 3vw;
	text-align: left;
	align-self: center;
`;

const Number = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 1;		
font-size: 6vw;
text-align: right;
align-self: center;
font-weight: bold;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
grid-template-rows: 3vw 3vw 6vw;
color: #595e60;
font-family: 'Gudea', sans-serif;

`;

export class Ties extends Component {
  render() {
    return (
      <Wrapper>
        <Number>{this.props.ties}</Number>
        <Label>TIES</Label>
      </Wrapper>
    )
  }
}
