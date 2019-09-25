import React from 'react';
import Card from '../containers/card.container';
import cards from '../datas';
import { Container, Row } from 'reactstrap';

const CardList = () => {
  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </Row>
    </Container>
  );
};
export default CardList;
