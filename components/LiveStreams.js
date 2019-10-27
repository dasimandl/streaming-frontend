import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Player from "./Player";

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
        player_embed_code
        player_hls_playback_url
      }
      thumbnail {
        id
        thumbnail_url
      }
      state {
        ip_address
        id
        state
      }
    }
  }
`;

export default class LiveStreams extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_LIVESTREAMS_QUERY}>
          {({ data: { liveStreams } }, error, loading) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {liveStreams &&
                  liveStreams.map(stream => {
                    return (
                      <div>
                        <Player
                          stream={stream}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
