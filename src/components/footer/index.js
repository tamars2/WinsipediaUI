import React, { Component } from 'react';

import { Trademark } from '../../subcomponents/footer';
import { Wordmark } from '../../subcomponents/footer';
import { MatchupLink } from '../../subcomponents/footer';
import FooterGrid from "./FooterGrid.js";
import TrademarkPosition from "./TrademarkPosition.js";



export class Footer extends Component {
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
        	<Trademark/>
				</TrademarkPosition>
				<Wordmark/>
				<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}/>
			</FooterGrid>
        )
    }

}

