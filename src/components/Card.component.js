import React from 'react';
import './Card.css';
import { MdPlayCircleOutline } from 'react-icons/md';

const Card = ({ source }) => {
  return (
    <div className="imageWrapper">
      <div className="icon">
        <MdPlayCircleOutline style={{ color: 'white', height: 50, width: 50 }} />
      </div>
      <img
        className="image"
        src={source}
        alt="exemple"
        height="100"
        width="150"
        style={{ padding: 10 }}
      />
    </div>
  );
};

export default Card;
