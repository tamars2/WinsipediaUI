import React, { Component } from 'react';

export default class TeamLogo extends Component {

  constructor(){
    super(props);

  }
  
  render() {
    return (
      <div>
        <img className="teamLogo" src={require(`../public/images/Team_logos/${slug}.120.png`)} alt={schoolName}></img>
      </div>
    )
  }

}
