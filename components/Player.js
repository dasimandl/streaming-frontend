import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
  playbackError = error => {
    const { stream } = this.props;
    const { player_hls_playback_url, player_video_poster_image_url } = stream.details;

    console.error("received playback error:", error);
    this.player.showPreview();
  };
  ref = player => {
    this.player = player;
  };
  render() {
    const { stream } = this.props;
    const { player_hls_playback_url, player_video_poster_image_url } = stream.details;
    return (
      <div>
        <ReactPlayer
          onError={this.playbackError}
          controls
          url={player_hls_playback_url}
          playing={true}
          pip
          light={player_video_poster_image_url}
          ref={this.ref}
        />
      </div>
    );
  }
}
