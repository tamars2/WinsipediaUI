import React, { Component } from 'react';

import { Matchup } from './react/views';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache()
});

function getParameterByName(parameter) {
	var match = RegExp('[?&]' + parameter + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const school = getParameterByName("school")
const matchupSchool = getParameterByName("matchupSchool")
const verbose = getParameterByName("verbose")

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolSlug: school,
      matchupSchoolSlug: matchupSchool,
      verbose: verbose,
  }}

  render() {
    return (
      <ApolloProvider client={client}>
        <Matchup schoolSlug = {this.state.schoolSlug} matchupSchoolSlug = {this.state.matchupSchoolSlug} verbose = {this.state.verbose}/>
      </ApolloProvider>

    )
  }
}
