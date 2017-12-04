import React, { Component } from 'react';
import { TeamLogo } from '../subcomponents/header';
import { Ties } from '../subcomponents/header';
import { Wins } from '../subcomponents/header';
import {WinLossBar} from '../subcomponents/header'



export class Header extends Component {
    componentWillMount(){
        console.log(this.props)
        this.setState({
            schoolSlug: this.props.matchUpData.data.team.SchoolSlug,
            schoolWins: this.props.matchUpData.data.team.Matchup.Wins,
            schoolTies: this.props.matchUpData.data.team.Matchup.Ties,
            schoolWinPercent: this.props.matchUpData.data.team.Matchup.WinPercent,   
            schoolColor: this.props.matchUpData.data.team.Branding.HexColor,          
            matchupSchoolSlug:this.props.matchUpData.data.team.MatchupSlug,
            matchupSchoolWins: this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.Wins,
            matchupSchoolWinPercent: this.props.matchUpData.data.team.Matchup.MatchupTeam.Matchup.WinPercent,
            matchupSchoolColor: this.props.matchUpData.data.team.Matchup.MatchupTeam.Branding.HexColor,
        })
    }     
 
    render() {
        return (
            <div className="header">
                <TeamLogo 
                    slug={this.state.schoolSlug}
                />
                <Wins 
                    wins={this.state.schoolWins} 
                    percent={this.state.schoolWinPercent}
                />
                <Ties 
                    ties={this.state.schoolTies}
                />
                <Wins 
                    wins={this.state.matchupSchoolWins} 
                    percent={this.state.matchupSchoolWinPercent}
                />
                <TeamLogo 
                    slug={this.state.matchupSchoolSlug}
                />
                <WinLossBar 
                    schoolColor={this.state.schoolColor} 
                    matchupSchoolColor={this.state.matchupSchoolColor} 
                    schoolWins={this.state.schoolWins} 
                    ties={this.state.schoolTies} 
                    matchupWins={this.state.matchupSchoolWins}
                />
            </div>
        )
    }

}

