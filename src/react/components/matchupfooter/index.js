import React, { Component } from 'react';
import styled from "styled-components";

import { MatchupLink } from '../../subcomponents/';
import { Wordmark } from '../../subcomponents/';

const Wrapper = styled.div`
	display: grid;  
	grid-template-columns: 1fr 1fr;
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
		else {
			return (
				<Wrapper>
                    <Wordmark/>
                    <MatchupLink schoolSlug={this.props.matchUpData.data.team.SchoolSlug} matchupSchoolSlug={this.props.matchUpData.data.team.MatchupSlug}/>
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


