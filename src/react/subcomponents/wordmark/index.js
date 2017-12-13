import React, { Component } from 'react';

import WordmarkStyle from "./WordmarkStyle.js";

export class Wordmark extends Component {

  render() {
    return (
        <WordmarkStyle
					src={require('../../../media/branding/winsipedia_logo.png')} alt="Winsipedia Logo"
				/>
    )
  }

}
