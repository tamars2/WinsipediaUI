import React, { Component } from 'react';

import TiesGrid from "./TiesGrid.js";
import TiesLabel from "./TiesLabel.js";
import NumberTies from "./NumberTies.js";

export class Ties extends Component {

  render() {
    return (
      <TiesGrid>
        <NumberTies>{this.props.ties}</NumberTies>
        <TiesLabel>TIES</TiesLabel>
      </TiesGrid>
    )
  }

}
