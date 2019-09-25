import React from 'react';
import Card from './Card.component';
import cards from '../datas';
import { Container, Row, Col } from 'reactstrap';

const CardList = () => {
  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Card key={index} source={card.thumb} />
        ))}
      </Row>
    </Container>
  );
};
export default CardList;
