import React, { Component } from 'react';

import { Trademark } from '../../subcomponents/footer';
import { MatchupLink } from '../../react/subcomponents/';
import { Wordmark } from '../../react/subcomponents/';

import FooterGrid from "./FooterGrid.js";
import TrademarkPosition from "./TrademarkPosition.js";



export class MatchupFooter extends Component {
    componentWillMount(){
        this.setState({
            schoolSlug: this.props.matchUpData.data.team.SchoolSlug,
            matchupSchoolSlug:this.props.matchUpData.data.team.MatchupSlug,            
        })
    }     
 
    render() {
        return (
			<FooterGrid>
				<TrademarkPosition>
                    <Wordmark/>
				</TrademarkPosition>
				<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}/>
			</FooterGrid>
        )
    }

}

