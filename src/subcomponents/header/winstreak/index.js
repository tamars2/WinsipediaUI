import React, { Component } from 'react';

import WinStreakGrid from "./WinStreakGrid.js";
import WinStreakTeam from "./WinStreakTeam.js"
import WinStreakYears from "./WinStreakYears.js"
import WinStreakLabel from "./WinStreakLabel.js"
import WinStreakNumber from "./WinStreakNumber.js"


export class WinStreak extends Component {
  componentWillMount(){
    console.log(this.props)
    // this.setState({      
    //   winStreakSchoolColor: this.props.winStreakSchoolColor,
    // })
  }

  
  
  render() {
    return (
      <WinStreakGrid>
        <WinStreakLabel>CURRENT WIN STREAK <WinStreakNumber>{this.props.winStreak}</WinStreakNumber> <WinStreakTeam winStreakSchoolColor={this.props.winStreakSchoolColor}>{this.props.winStreakSchool.toUpperCase()}</WinStreakTeam></WinStreakLabel>
        <WinStreakYears>({this.props.winStreakYears})</WinStreakYears>
      </WinStreakGrid>
    )
  }

}
