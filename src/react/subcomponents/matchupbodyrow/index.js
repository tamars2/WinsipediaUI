import React, { Component } from 'react';
import styled from "styled-components";

import { RankAndPercent } from '../';
import { RankAndPercentLabel } from '../';


const Wrapper = styled.div`
  display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`
const LeftRankAndPercents = styled.div`
grid-column: 1;		
align-self: center;
`;

const RightRankAndPercents = styled.div`
grid-column: 3;		
align-self: center;
`;

const Label = styled.div`
grid-column: 2;		
align-self: center;
`;
export class MatchupBodyRow extends Component {
  constructor(props) {
    super(props)
    this.leading = this.leading.bind(this)
  }
  
  leading(a,b) {
    if (a<b) {
      return true
    }
    else {
      return false
    }
  }
  render() {
    return (
        <Wrapper>
          <LeftRankAndPercents>
					  <RankAndPercent leading = {this.leading(this.props.schoolRank,this.props.matchupSchoolRank)} side = "left" rank = {this.props.schoolRank} data = {this.props.schoolData} color = {this.props.schoolColor}/>
					</LeftRankAndPercents>
          <Label>
            <RankAndPercentLabel label = {this.props.label}/>
					</Label>
          <RightRankAndPercents>
            <RankAndPercent leading = {this.leading(this.props.matchupSchoolRank,this.props.schoolRank)} side = "right" rank = {this.props.matchupSchoolRank} data = {this.props.matchupSchoolData} color = {this.props.matchupSchoolColor}/>
          </RightRankAndPercents>
        </Wrapper>
    )
  }

}
