import React, { Component } from 'react';

import { MatchupLink } from '../../react/subcomponents/';
import { Wordmark } from '../../react/subcomponents/';

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
				<div>
                    <Wordmark/>
				</div>
				<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}/>
			</FooterStyle>
        )
    }

}

