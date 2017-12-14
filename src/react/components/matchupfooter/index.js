import React, { Component } from 'react';
import styled from "styled-components";

import { MatchupLink } from '../../subcomponents/';
import { Wordmark } from '../../subcomponents/';

const FooterStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`

export class MatchupFooter extends Component {
    componentWillMount(){
        this.setState({
            schoolSlug: this.props.matchUpData.data.team.SchoolSlug,
            matchupSchoolSlug:this.props.matchUpData.data.team.MatchupSlug,            
        })
    }     
 
    render() {
        return (
			<FooterStyles>
                <Wordmark/>
				<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}/>
			</FooterStyles>
        )
    }

}

