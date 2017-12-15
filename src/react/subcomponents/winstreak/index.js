import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
display: grid;
grid-template-rows: 4vw 4vw;
color: #595e60;
`;

const Number = styled.span`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;		
font-size: 4vw;
text-align: center;
align-self: center;
font-family: 'Gudea', sans-serif;
font-weight: bold;
`;

const Label = styled.div`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;		
font-size: 4vw;
text-align: center;
align-self: center;
font-family: 'Gudea', sans-serif;
`;

const Team = styled.span`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;		
font-size: 4vw;
text-align: center;
align-self: center;
font-family: 'Gudea', sans-serif;
color: ${
  props => (
    props.winStreakSchoolColor
  )
};	
font-weight: bold;
`;

const Years = styled.div`
grid-row-start: 2;
grid-row-end: 3;
grid-column: 1;		
font-size: 4vw;
text-align: center;
align-self: center;
font-family: 'Gudea', sans-serif;
`;
 

export class WinStreak extends Component {
  
  render() {
    return (
      <Wrapper>
        <Label>CURRENT WIN STREAK <Number>{this.props.winStreak}</Number> <Team winStreakSchoolColor={this.props.winStreakSchoolColor}>{this.props.winStreakSchool.toUpperCase()}</Team></Label>
        <Years>({this.props.winStreakYears})</Years>
      </Wrapper>
    )
  }
}
