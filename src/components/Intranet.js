import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './Courses';


const client = new ApolloClient({
  uri: "http://141.28.11.40:3000/graphql"
});

const Intranet = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <h2>Gebuchte Veranstaltungen</h2>
      <hr />
      <p className="App-intro">
        Hier können Sie Ihre gebuchten Veranstaltungen und Vorlesungen der HFU nachsehen.
      </p>
      
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
)


export default Intranet;
