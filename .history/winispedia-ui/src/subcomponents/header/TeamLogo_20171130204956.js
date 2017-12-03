import React, { Component } from 'react';

export default class TeamLogo extends Component {

  
  render() {
    return (
      <div>
        <img className="teamLogo" src={require(`../public/images/Team_logos/${team}.120.png`)} alt={schoolName}>
      </div>
    )
  }

}
