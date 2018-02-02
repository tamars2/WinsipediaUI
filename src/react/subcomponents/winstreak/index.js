import React, { Component } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
display: grid;
grid-template-rows: 4vw 4vw;
color: #595e60;
`;

const Number = styled.span`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;	
align-self: center;
font-size: 4vw;
font-family: 'Gudea', sans-serif;
font-weight: bold;
text-align: center;
`;

const Label = styled.div`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;
align-self: center;
font-family: 'Gudea', sans-serif;
font-size: 4vw;
text-align: center;
`;

const Team = styled.span`
grid-row-start: 1;
grid-row-end: 2;
grid-column: 1;
align-self: center;
font-family: 'Gudea', sans-serif;
font-size: 4vw;
font-weight: bold;
text-align: center;
color: ${
  props => (
    props.winStreakSchoolColor
  )
};	

`;

const Years = styled.div`
grid-row-start: 2;
grid-row-end: 3;
grid-column: 1;
align-self: center;
font-family: 'Gudea', sans-serif;
font-size: 4vw;
text-align: center;
`;
 

export class WinStreak extends Component {
  constructor(props) {
    super(props)
    this.formatYears = this.formatYears.bind(this)

}
formatYears() {
  if ((this.props.winStreakYears.substring(0, 4))!==(this.props.winStreakYears.substring(5, 9))) {
    return ("(" + this.props.winStreakYears + ")")
  }
  else {
    return "(" + (this.props.winStreakYears.substring(5, 9)) + ")"
  }
}
  
  render() {
    return (
      <Wrapper>
        <Label>CURRENT WIN STREAK <Number>{this.props.winStreak}</Number> <Team winStreakSchoolColor={this.props.winStreakSchoolColor}>{this.props.winStreakSchool.toUpperCase()}</Team></Label>
        <Years>{this.formatYears()}</Years>
      </Wrapper>
    )
  }
}
