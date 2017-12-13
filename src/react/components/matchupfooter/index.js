import React, { Component } from 'react';

import { MatchupLink } from '../../subcomponents/';
import { Wordmark } from '../../subcomponents/';

import FooterStyle from "./FooterStyle.js";

export class MatchupFooter extends Component {
    componentWillMount(){
        this.setState({
            schoolSlug: this.props.matchUpData.data.team.SchoolSlug,
            matchupSchoolSlug:this.props.matchUpData.data.team.MatchupSlug,            
        })
    }     
 
    render() {
        return (
			<FooterStyle>
                <Wordmark/>
				<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}/>
			</FooterStyle>
        )
    }

}

