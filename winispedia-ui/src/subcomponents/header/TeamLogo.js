import React, { Component } from 'react';

export default class TeamLogo extends Component {

  static defaultProps = {
    slug: "georgia-tech",
    schoolName: "Georgia Tech",
  }

  const testName = "ryan";
  
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
