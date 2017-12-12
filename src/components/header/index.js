import React, { Component } from 'react';
import { TeamLogo } from '../../react/subcomponents/';
import { Ties } from '../../subcomponents/header';
import { Wins } from '../../subcomponents/header';
import {WinLossBar} from '../../subcomponents/header';
import {WinStreak} from '../../subcomponents/header';
import { DottedLine } from '../../react/subcomponents/';
import HeaderGrid from "./HeaderGrid.js";
import SchoolLogoPosition from "./SchoolLogoPosition.js";
import SchoolWinsPosition from "./SchoolWinsPosition.js";
import TiesPosition from "./TiesPosition.js";
import MatchupSchoolWinsPosition from "./MatchupSchoolWinsPosition.js";
import DottedLinePosition from "./DottedLinePosition.js";
import MatchupSchoolLogoPosition from "./MatchupSchoolLogoPosition.js";
import WinLossBarPosition from "./WinLossBarPosition.js";
import WinStreakPosition from "./WinStreakPosition.js";



export class MatchupHeader extends Component {
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
            school: this.props.matchUpData.data.team.SchoolName,
            matchupSchool: this.props.matchUpData.data.team.Matchup.MatchupTeam.SchoolName,
            winStreak: this.props.matchUpData.data.team.Matchup.WinStreak,
            winStreakSchool: this.props.matchUpData.data.team.Matchup.WinStreakSchool,
            winStreakSchoolColor: this.props.matchUpData.data.team.Matchup.WinStreakSchoolColor,
            winStreakYears: this.props.matchUpData.data.team.Matchup.WinStreakYears,
            
        })
    }     
 
    render() {
        return (
            <HeaderGrid>
                <SchoolLogoPosition>
                <TeamLogo 
                    slug={this.state.schoolSlug}
                    school={this.state.school}
                />
                </SchoolLogoPosition>
                <SchoolWinsPosition>
                <Wins 
                    wins={this.state.schoolWins} 
                    percent={this.state.schoolWinPercent}
                />
                </SchoolWinsPosition>
                <TiesPosition>
                <Ties 
                    ties={this.state.schoolTies}
                />
                </TiesPosition>
                <MatchupSchoolWinsPosition>
                <Wins 
                    wins={this.state.matchupSchoolWins} 
                    percent={this.state.matchupSchoolWinPercent}
                />
                </MatchupSchoolWinsPosition>
                <MatchupSchoolLogoPosition>
                <TeamLogo 
                    slug={this.state.matchupSchoolSlug}
                    school={this.state.matchupSchool}
                />
                </MatchupSchoolLogoPosition>
                <WinLossBarPosition>
                <WinLossBar 
                    schoolColor={this.state.schoolColor} 
                    matchupSchoolColor={this.state.matchupSchoolColor} 
                    schoolWins={this.state.schoolWins} 
                    ties={this.state.schoolTies} 
                    matchupWins={this.state.matchupSchoolWins}
                />
                </WinLossBarPosition>
                <WinStreakPosition>
                <WinStreak
                winStreak={this.state.winStreak} 
                winStreakSchool={this.state.winStreakSchool} 
                winStreakYears={this.state.winStreakYears} 
                winStreakSchoolColor={this.state.winStreakSchoolColor}                
                />
                </WinStreakPosition>
                <DottedLinePosition>
                <DottedLine/>
                </DottedLinePosition>
            </HeaderGrid>
        )
    }

}

