import React, { Component } from 'react';

import WinsGrid from "./WinsGrid.js";
import NumberWins from "./NumberWins.js"
import WinsLabel from "./WinsLabel.js"
import PercentLabel from "./PercentLabel.js"


export class Wins extends Component {

  render() {
    return (
      <WinsGrid>
        <NumberWins>{this.props.wins}</NumberWins>
        <WinsLabel>WINS</WinsLabel>
        <PercentLabel>({(Math.round(this.props.percent*1000)/1000).toString().substring(1, 5)})</PercentLabel>
      </WinsGrid>
    )
  }

}
