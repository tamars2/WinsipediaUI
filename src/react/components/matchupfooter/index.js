import React, { Component } from 'react'
import styled from "styled-components"

import { MatchupLink } from '../../subcomponents/'
import { Wordmark } from '../../subcomponents/'

const Wrapper = styled.div`
	display: grid;  
	grid-template-columns: 60% 40%;
	padding-top: 2vw;
	padding-bottom: 2vw;
`
const Loading = styled.div`
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 1;
	grid-column-end: 3;	
	height: 20px;
`
export class MatchupFooter extends Component {
    constructor(props) {
		super(props)
		this.loadFooter = this.loadFooter.bind(this)
    }
    
    loadFooter() {
		const { matchUpData } = this.props

		if (matchUpData.data.loading) {
			return (
				<Wrapper>
					<Loading></Loading>
				</Wrapper>
			)
		}
		else if (typeof matchUpData.data.error === 'undefined') {
			return (
				<Wrapper>
					<Wordmark />
					<MatchupLink schoolSlug={matchUpData.data.team.SchoolSlug}
					matchupSchoolSlug={matchUpData.data.team.MatchupSlug}/>
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
		<div> { this.loadFooter() } </div>
		)
	}
}


