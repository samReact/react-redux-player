import React, { Component } from 'react';
import { Player, ControlBar, ReplayControl } from 'video-react';

class PlayerItem extends Component {
  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
          ControlBar
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" />
          <ControlBar autoHide={false}>
            <ReplayControl seconds={10} order={2.2} />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

export default PlayerItem;
