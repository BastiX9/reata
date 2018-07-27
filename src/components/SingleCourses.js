import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SingleCourse from './SingleCourse';

const SingleCourses = () => (
    <Query query={gql`
      {singleCourse (userName:"glockart", id : "1930", password:"1fd3c0f5ce62fa255876884d9aa90d81")
{id name short vinfo block}}
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;

              console.log(data.singleCourse.name);
              console.log(data.singleCourse);

            return (
                <SingleCourse course={data.singleCourse} />

            );

        }}
    </Query>
);

export default SingleCourses;
