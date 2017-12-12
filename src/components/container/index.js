import React, { Component } from 'react';

import ContainerFrame from './ContainerFrame.js';
import ContainerBackground from './ContainerBackground.js';

export class ViewContainer extends Component {
  render() {
    return (
      <ContainerBackground>
        <ContainerFrame>
        </ContainerFrame>	
      </ContainerBackground>
    )
  }
}

