import React, { Component } from 'react';
import { TeamLogo } from '../subcomponents/header';
import { Ties } from '../subcomponents/header';
import { Wins } from '../subcomponents/header';



export class Header extends Component {
    componentWillMount(){
        console.log(this.props)
      }     

    render() {
        return (
            <div className="header">
                <TeamLogo slug={this.props.matchUpData.data.team.SchoolSlug}/>
                <Wins wins={this.props.matchUpData.data.team.Matchup.Wins} percent={this.props.matchUpData.data.team.Matchup.WinPercent}/>
                <Ties ties={this.props.matchUpData.data.team.Matchup.Ties}/>
                <Wins wins={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins} percent={this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinPercent}/>
                <TeamLogo slug={this.props.matchUpData.data.team.MatchupSlug}/>
            </div>
        )
    }

}

