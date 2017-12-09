import React, { Component } from 'react';

import TrademarkGrid from "./TrademarkGrid.js";

export class Trademark extends Component {

  render() {
    return (
        <TrademarkGrid
				src={require('../../../public/branding/Winsipedia.90.png')} alt="Winsipedia Trademark"
				/>
    )
  }

}
