import React, { Component } from 'react';

import TeamLogoGrid from "./TeamLogoGrid.js";

export class TeamLogo extends Component {

  render() {
    return (
        <TeamLogoGrid src={require('../../../media/images/Team_logos/' + this.props.slug + '.240.png')} alt={this.props.school}></TeamLogoGrid>
    )
  }

}
