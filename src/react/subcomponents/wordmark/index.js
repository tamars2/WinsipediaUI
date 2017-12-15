import React, { Component } from 'react';
import styled from "styled-components";

const Wordmarks = styled.img`
	align-self: center;
	display: block;
	width: 80%;
	padding-left:2%;
`;

export class Wordmark extends Component {

  render() {
    return (
        <Wordmarks
					src={require('../../../media/branding/winsipedia_logo.png')} alt="Winsipedia Logo"
				/>
    )
  }

}
