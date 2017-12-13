import React, { Component } from 'react';

import ViewContainerBackgroundStyle from './ViewContainerBackgroundStyle.js';

export class ViewContainerBackground extends Component {
  render(props) {
    return (
      <ViewContainerBackgroundStyle>
        {this.props.children}
      </ViewContainerBackgroundStyle>
    )
  }
}

