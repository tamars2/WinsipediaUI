import React, { Component } from 'react';
import styled from "styled-components";

import { TeamLogo } from '../../subcomponents/';
import { Ties } from '../../subcomponents/';
import { Wins } from '../../subcomponents/';
import {WinLossBar} from '../../subcomponents/';
import {WinStreak} from '../../subcomponents/';
import { DottedLine } from '../../subcomponents/';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 100% 100% 100% 100% 100%;
`;

const SchoolLogoPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 1;		
align-self: center;
`;

const SchoolWinsPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 2;		
align-self: center;
`;

const TiesPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 3;		
align-self: center;
`;

const MatchupSchoolWinsPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 4;			
align-self: center;
`;

const MatchupSchoolLogoPosition = styled.div`
grid-row-start: 1;
grid-row-end: 3;
grid-column: 5;		
align-self: center;
`;

const DottedLinePosition = styled.div`
grid-column-start: 1;
grid-column-end: 6;		
grid-row: 6	;		
align-self: center;
`;

const WinLossBarPosition = styled.div`
grid-row: 3;
grid-column-start: 2;
grid-column-end: 5;		
align-self: center;
margin-top: -5%
`;

const WinStreakPosition = styled.div`
grid-row: 5;
grid-column-start: 1;
grid-column-end: 6;		
align-self: center;
margin-top: 6%;
`;

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
            <Wrapper>
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
                <DottedLine bold/>
                </DottedLinePosition>
            </Wrapper>
        )
    }

}

