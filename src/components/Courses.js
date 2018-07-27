import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './Course.css';
import Course from './Course';

const Courses = () => (
    <Query query={gql`
        {
            allCourses (

              userName:"glockart", password: "1fd3c0f5ce62fa255876884d9aa90d81")
            {
                id,
                name,
                short
            }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;

            return data.allCourses.map((currentCourse) => (
                <Course course={currentCourse} />
            ));
        }}
    </Query>
);

export default Courses;
