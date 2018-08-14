import React from 'react';
import { Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle } from 'reactstrap';

const EventCard = (props) => {
  return (
    <Col md="4" sm="12" style={{ padding: 10 }}>
      <Card
        style={{ 
          backgroundColor: '#1b1e3e',
          minHeight: '300px',
          borderRadius: '25% 10%' }}>
        <CardHeader
          style={{
            color: '#f2928f',
            font: 'small-caps bold 16px cursive' }}>{props.title}</CardHeader>
        <CardBody>
          <CardTitle
            style={{
              color: '#f2bfac',
              font: 'italic small-caps bold 16px/2' }}>{props.description}</CardTitle>

          <Button style={{ backgroundColor: '#f2928f' }}>
            <a href={props.buttonLink} style={{ color: '#FFFFFF' }}>{props.buttonText}</a></Button>
        </CardBody>
        <CardFooter
          style={{
            color: '#f2bfac',
            font: 'italic small-caps bold 16px/2' }}>{props.place} <br/> {props.date}</CardFooter>
      </Card>
    </Col>
  );
};

export default EventCard;