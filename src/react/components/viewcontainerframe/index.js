import React, { Component } from 'react';
import styled from "styled-components";

import {ViewContainerBackground} from '../../subcomponents'

const ViewContainerFrames = styled.div`
	border-radius: 10px;
	background: white;
	padding: 0px;
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

