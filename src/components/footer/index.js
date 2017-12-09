import React, { Component } from 'react';

// import { MatchupLink } from '../../subcomponents/footer';
import { Trademark } from '../../subcomponents/footer';
import { Wordmark } from '../../subcomponents/footer/wordmark/index';
import { MatchupLink } from '../../subcomponents/footer/matchuplink/index';
// import { Wordmark } from '../../subcomponents/footer';

export class Footer extends Component {
    componentWillMount(){
        this.setState({
            schoolSlug: this.props.matchUpData.data.team.SchoolSlug,
            matchupSchoolSlug:this.props.matchUpData.data.team.MatchupSlug,            
        })
    }     
 
    render() {
        return (
					<div>
            <Trademark>

            </Trademark>
						<Wordmark/>
						<MatchupLink schoolSlug={this.state.schoolSlug} matchupSchoolSlug={this.state.matchupSchoolSlug}
/>
					</div>
        )
    }

}

