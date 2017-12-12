import React, { Component } from 'react';

// import { ViewContainerFrame } from '../../subcomponents/';
// import { ViewContainerBackground } from '../../subcomponents/';

import ViewContainerStyle from './ViewContainerStyle.js';

export class ViewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <ViewContainerStyle>
          {this.props.children}
      </ViewContainerStyle>
    )
  }
}

