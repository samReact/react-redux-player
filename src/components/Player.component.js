import React, { useRef } from 'react';
import { Button, Container } from 'reactstrap';

import { useSelector } from '../utils/react-redux-hooks';
import { Player } from 'video-react';
import { IconPause, IconArrow, ControlButtonsWrapper } from '../styled/style';
import { Play, Pause, Load } from '../utils/player-methods';

const PlayerItem = props => {
  const url = useSelector(state => state.playerReducer.url);
  let player = useRef();

  React.useEffect(() => {
    Load(player);
  });

  return (
    <Container style={{ marginTop: 20 }}>
      <Player fluid ref={player} autoPlay ControlBar>
        <source src={url} />
      </Player>
      <ControlButtonsWrapper>
        <Button
          onClick={() => Play(player)}
          outline
          color="secondary"
          style={{ margin: 10 }}
        >
          <IconArrow />
        </Button>
        <Button
          onClick={() => Pause(player)}
          outline
          color="secondary"
          style={{ margin: 10 }}
        >
          <IconPause />
        </Button>
      </ControlButtonsWrapper>
    </Container>
  );
};

export default PlayerItem;
