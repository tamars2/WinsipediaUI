import React, { Component } from 'react';
import styled from "styled-components";

import { MatchupLink } from '../../subcomponents/';
import { Wordmark } from '../../subcomponents/';

const Wrapper = styled.div`
	display: grid;  
	grid-template-columns: 1fr 1fr;
	padding-top: 2vw;
	padding-bottom: 2vw;
`

export class MatchupFooter extends Component {
    constructor(props) {
			super(props)
			this.loadFooter = this.loadFooter.bind(this)
    }
    
    loadFooter() {
		if (this.props.matchUpData.data.loading) {
			return (
				<Wrapper>
					<div></div>
				</Wrapper>
			)
		}
		else if (typeof this.props.matchUpData.data.error === "undefined") {
			return (
				<Wrapper>
					<Wordmark/>
					<MatchupLink schoolSlug={this.props.matchUpData.data.team.SchoolSlug} matchupSchoolSlug={this.props.matchUpData.data.team.MatchupSlug}/>
				</Wrapper>
			)
		}
		else {
			return (
				<Wrapper>
					<div>So sad</div>
				</Wrapper>
			)
		}
		}
	render() {
    return (
    <div>{this.loadFooter()}</div>
		)
	}
}


