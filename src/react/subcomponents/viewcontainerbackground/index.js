import React, { Component } from 'react'
import styled from "styled-components"

const ViewContainerBackgrounds = styled.div`
	background: rgb(235,235,235);
	height: 100%;
	padding: 10px;
`

export class ViewContainerBackground extends Component {
  render(props) {
    return (
      <ViewContainerBackgrounds>
        {this.props.children}
      </ViewContainerBackgrounds>
    )
  }
}

