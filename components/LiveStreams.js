import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Player from "./Player";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  Typography,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";

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

const useStyles = makeStyles({
  card: {
    maxWidth: 350
  },
  media: {
    height: 200
  }
});

export default function LiveStreams() {
  const styles = useStyles();
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
                    <Card key={stream.id} className={styles.card}>
                      <CardActionArea>
                        <CardMedia className={styles.media} title="Contemplative Reptile">
                          <Player stream={stream} />
                        </CardMedia>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
            </div>
          );
        }}
      </Query>
    </div>
  );
}
