import React, { Component } from 'react';

import WordmarkGrid from "./WordmarkGrid.js";

export class Wordmark extends Component {

  render() {
    return (
        <WordmarkGrid
					src={require('../../../media/branding/winsipedia_logo.png')} alt="Winsipedia Logo"
				/>
    )
  }

}
