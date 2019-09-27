import React from 'react';
import styled from 'styled-components';
import { MdPlayCircleOutline, MdPause, MdPlayArrow } from 'react-icons/md';

const mdPlayCircleOutline = props => <MdPlayCircleOutline className={props.className} />;
const mdPause = props => <MdPause className={props.className} />;
const mdPlay = props => <MdPlayArrow className={props.className} />;

export const IconPlay = styled(mdPlayCircleOutline)`
  color: white;
  height: 50px;
  width: 50px;
`;

export const IconPause = styled(mdPause)`
  height: 50px;
  width: 50px;
`;

export const IconArrow = styled(mdPlay)`
  height: 50px;
  width: 50px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 10;
`;

export const Image = styled.img`
  padding: 0.5em;
`;

export const ImageWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  padding: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.1);
  }
`;

ImageWrapper.displayName = 'ImageWrapper';

export const ControlButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
