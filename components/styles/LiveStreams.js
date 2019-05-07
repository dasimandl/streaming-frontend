import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_LIVESTREAMS_QUERY = gql`
  query ALL_LIVESTREAMS_QUERY {
      liveStreams {
      id
      name
      created_at
      updated_at
      details {
        name
        id
        player_video_poster_image_url
        player_countdown
      }
    } 
  }
`;

export default class LiveStreams extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_LIVESTREAMS_QUERY}>
          {(data, error, loading) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return <div>{Object.keys(data.data)}</div>;
          }}
        </Query>
      </div>
    );
  }
}
