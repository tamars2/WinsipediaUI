import React, { Component } from 'react';

import ViewContainerFrameStyle from './ViewContainerFrameStyle.js';
import {ViewContainerBackground} from '../'

export class ViewContainerFrame extends Component {

  render(props) {
    return (
      <ViewContainerBackground>
        <ViewContainerFrameStyle>
          {this.props.children}
        </ViewContainerFrameStyle>
      </ViewContainerBackground>
    )
  }
}

