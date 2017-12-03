import React, { Component } from 'react';

export class TeamLogo extends Component {
  
  static defaultProps = {
    slug: "georgia-tech",
    schoolName: "Georgia Tech",
  }

  render() {
    return (
      <div>
        <img className="teamLogo" src={require('../../public/images/Team_logos/georgia-tech.120.png')} alt="Georgia Tech"/>
      </div>
    )
  }

}
