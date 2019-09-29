import React from 'react';
import PropTypes from 'prop-types';

import { IconWrapper, Image, ImageWrapper, IconPlay } from '../styled/style';
import { useDispatch } from '../utils/react-redux-hooks';
import { SOURCE_CHANGE } from '../actions/types/player.action.type';

const Card = props => {
  const { card } = props;
  const dispatch = useDispatch();
  const payload = { url: card.source };
  return (
    <ImageWrapper onClick={() => dispatch({ payload, type: SOURCE_CHANGE })}>
      <IconWrapper>
        <IconPlay />
      </IconWrapper>
      <Image src={card.thumb} alt="exemple" height="100" width="150" />
    </ImageWrapper>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
