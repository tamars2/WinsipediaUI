import React, { Component } from 'react';

import WordmarkGrid from "./WordmarkGrid.js";

export class Wordmark extends Component {

  render() {
    return (
        <WordmarkGrid
					src={require('../../../public/branding/wordmark.png')} alt="Winsipedia Trademark"
				/>
    )
  }

}
