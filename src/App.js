import React, { Component } from 'react';
import { Header } from './components';
import { DottedLine } from './subcomponents/common/DottedLine';


import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data": {
        "team": {
          "SchoolName": "Georgia Tech",
          "SchoolSlug": "georgia-tech",
          "MatchupSlug": "alabama",
          "Branding": {
            "HexColor": "#b39454"
          },
          "Matchup": {
            "Wins": 21,
            "Ties": 3,
            "Losses": 28,
            "WinPercent": 0.43269230769231,
            "MatchupTeam": {
              "SchoolName": "Alabama",
              "Branding": {
                "HexColor": "#a32136"
              },
              "Matchup": {
                "Wins": 28,
                "WinPercent": 0.56730769230769
              }
            }
          }
        }
      }
    }
  }

  render() {
  
    return (
      // <div className="container">
      //   <div className="card">
      //     <div className="header">
      //       <img className="team1Logo" src={require(`../public/images/Team_logos/${team1}.120.png`)} alt="">
      //       </img>
      //       <img className="team2Logo" src={require(`../public/images/Team_logos/${team2}.120.png`)} alt="">
      //       </img>
      //       {/* <div>{team1}</div>
      //       <div>{team2}</div> */}
      //     </div>
      //     <div id="dotted-line"></div>
      //     <div className="records">
      //       RECORDS HERE
      //     </div>
      //     <div id="dotted-line"></div>
      //     <div className="national-championships">
      //       NATIONAL CHAMPIONSHIPS HERE
      //     </div>
      //     <div id="dotted-line"></div>
      //     <div className="conference-championships">
      //       CONFERENCE CHAMPIONSHIPS HERE
      //     </div>
      //     <div id="dotted-line"></div>
      //     <div className="bowl-games">
      //       BOWL GAMES HERE
      //     </div>
      //     <div id="dotted-line"></div>          
      //     <div className="wins-alltime">
      //       WINS ALL TIME HERE
      //     </div>
      //     <div id="dotted-line"></div>          
      //     <div className="links">
      //       LINKS HERE
      //     </div>                             
      //   </div>
      // </div>
      <div>
        <Header matchUpData={this.state}/>
        <DottedLine/>
      </div>

    );
  }
}
