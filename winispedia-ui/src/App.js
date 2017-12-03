import React, { Component } from 'react';
import { Header } from './components';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data": {
        "team": {
          "SchoolName": "Georgia Tech",
          "SchoolSlug": "georgia-tech",
          "MatchupSlug": "georgia",
          "Branding": {
            "HexColor": "#b39454"
          },
          "Matchup": {
            "Wins": 41,
            "Ties": 5,
            "Losses": 65,
            "MatchupTeam": {
              "SchoolName": "Georgia",
              "Branding": {
                "HexColor": "#CC0000"
              },
              "Matchup": {
                "Wins": 65,
                "Ties": 5
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
        <Header matchUpData={this.state}/>

    );
  }
}
