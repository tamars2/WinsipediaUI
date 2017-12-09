import React, { Component } from 'react';

import MatchupLinkGrid from "./MatchupLinkGrid.js";

export class MatchupLink extends Component {

  render() {
    return (
        <MatchupLinkGrid 
				href={"http://www.winsipedia.com/" + this.props.schoolSlug + "/vs/" + this.props.matchupSchoolSlug}>
				Full Matchup Page >
				</MatchupLinkGrid>
    )
  }

}
