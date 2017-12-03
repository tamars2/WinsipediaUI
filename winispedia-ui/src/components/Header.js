import React, { Component } from 'react';
import { TeamLogo } from '../subcomponents/header';

export class Header extends Component {     

    render() {
        return (
            <div>
                <TeamLogo slug={this.props.matchUpData.data.team.SchoolSlug}/>
                <TeamLogo slug={this.props.matchUpData.data.team.MatchupSlug}/>
            </div>
        )
    }

}

