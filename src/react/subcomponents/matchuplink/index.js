import React, { Component } from 'react';

import MatchupLinkStyle from "./MatchupLinkStyle.js";

export class MatchupLink extends Component {

  render() {
    return (
        <MatchupLinkStyle 
				href={"http://www.winsipedia.com/" + this.props.schoolSlug + "/vs/" + this.props.matchupSchoolSlug}>
				Full Matchup Page >
				</MatchupLinkStyle>
    )
  }

}
