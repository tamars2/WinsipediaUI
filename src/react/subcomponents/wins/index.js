import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
grid-template-rows: 3vw 3vw 6vw;
color: #595e60;
`;

const Number = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 1;		
font-size: 6vw;
text-align: right;
align-self: center;
font-family: 'Gudea', sans-serif;
font-weight: bold;
`;

const Percent = styled.div`
	grid-row: 2;
	grid-column: 2;		
	text-align: left;	
	font-size: 3vw;
	align: bottom;
	font-family: 'Gudea', sans-serif;
`;

const Label = styled.div`
grid-row: 1;
grid-column: 2;
text-align: left;
align: top;
font-size: 3vw;
font-family: 'Gudea', sans-serif;
`;

export class Wins extends Component {

  render() {
    return (
      <Wrapper>
        <Number>{this.props.wins}</Number>
        <Label>WINS</Label>
        <Percent>({(Math.round(this.props.percent*1000)/1000).toString().substring(1, 5)})</Percent>
      </Wrapper>
    )
  }

}