import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import SingleCourses from './SingleCourses';


const client = new ApolloClient({
  uri: "http://141.28.11.40:3000/graphql"
});

const Intranet2 = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
      
      </nav>
      <div>
        <SingleCourses />
      </div>
    </div>
  </ApolloProvider>
)


export default Intranet2;
