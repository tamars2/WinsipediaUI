import React, { Component } from 'react';

export class Wins extends Component {

  render() {
    return (
        <span className="wins">{this.props.wins} WINS({this.props.percent})</span>
    )
  }

}
