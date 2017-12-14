import React, { Component } from 'react';
import styled from "styled-components";

import {ViewContainerBackground} from '../../subcomponents'

const ViewContainerFrames = styled.div`
	border-radius: 20px;
	background: white;
	padding: 8px;
`

export class ViewContainerFrame extends Component {
  render(props) {
    return (
      <ViewContainerBackground>
        <ViewContainerFrames>
          {this.props.children}
        </ViewContainerFrames>
      </ViewContainerBackground>
    )
  }
}

