import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Container } from 'reactstrap';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import PropTypes from 'prop-types';

class PlayerItem extends Component {
  play = () => {
    this.player.play();
  };

  pause = () => {
    this.player.pause();
  };

  reload = () => {
    this.player.load();
  };
  render() {
    const { url, reload } = this.props;
    if (reload) {
      this.reload();
    }
    return (
      <Container style={{ marginTop: 20 }}>
        <Player
          fluid
          ref={player => {
            this.player = player;
          }}
          autoPlay
          ControlBar
        >
          <source src={url} />
        </Player>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={this.play} outline color="secondary" style={{ margin: 10 }}>
            <MdPlayArrow style={{ height: 50, width: 50 }} />
          </Button>
          <Button onClick={this.pause} outline color="secondary" style={{ margin: 10 }}>
            <MdPause style={{ height: 50, width: 50 }} />
          </Button>
        </div>
      </Container>
    );
  }
}

PlayerItem.propTypes = {
  url: PropTypes.string.isRequired,
  reload: PropTypes.bool.isRequired,
};

export default PlayerItem;
