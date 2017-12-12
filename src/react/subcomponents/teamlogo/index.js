import React, { Component } from 'react';

import TeamLogoStyle from "./TeamLogoStyle.js";

export class TeamLogo extends Component {

  render() {
    return (
        <TeamLogoStyle src={require('../../../media/images/team_logos/' + this.props.slug + '.240.png')} alt={this.props.school}></TeamLogoStyle>
    )
  }

}
