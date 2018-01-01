import React, { Component } from 'react';
import styled from "styled-components";

const DottedLines = styled.div`
			border-bottom: dashed 1px #c3c3c3;
			margin-top: .75vw;
			margin-bottom: .75vw;
`

export class DottedLine extends Component {
  render() {
    return (
			<DottedLines/>
    )
  }
}