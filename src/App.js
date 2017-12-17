import React, { Component } from 'react';

import { Matchup } from './react/views';

function getParameterByName(parameter) {
	var match = RegExp('[?&]' + parameter + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const school = getParameterByName("school")
const matchupSchool = getParameterByName("matchupSchool")


export default class App extends Component {
  componentWillMount(){
    this.setState({
        schoolSlug: school,
        matchupSchoolSlug: matchupSchool,            
    })
  }    
  render() {
    return (
      <Matchup schoolSlug = {this.state.schoolSlug} matchupSchoolSlug = {this.state.matchupSchoolSlug} />
    );
  }
}
