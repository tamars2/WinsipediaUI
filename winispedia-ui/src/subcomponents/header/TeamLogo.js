import React, { Component } from 'react';

export class TeamLogo extends Component {

  render() {
    return (
        <img className="teamLogo" src={require('../../public/images/Team_logos/' + this.props.slug + '.120.png')} alt="Georgia Tech"></img>
    )
  }

}
