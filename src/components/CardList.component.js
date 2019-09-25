import React from 'react';
import Card from './Card.component';
import cards from '../datas';
console.log(cards[0]);
const CardList = () => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} source={card.thumb} />
      ))}
    </div>
  );
};
export default CardList;
