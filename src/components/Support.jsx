import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bigTeton from '../img/tetonCoeur.png';

class Support extends React.Component {
  render() { 
    return (
      <Container>
        <Row style={{ paddingTop: '20px'}}>
          <Col sm='12' md={{ size: 8, offset: 2 }} >
            <h3>Tu veux soutenir le Télététon?</h3>
            <h3>A toi de choisir comment!</h3>
          </Col>
        </Row>
        <Row style={{ paddingTop: '20px'}}>
          <img
            src={bigTeton}
            alt="teton"
            style={{ height: '50px'}}/>
          <h6>1/ Réalise ta vidéo Télététon et partage là</h6>
        </Row>
        <Row>
          <p align='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row style={{ paddingTop: '20px'}}>
          <img
            src={bigTeton}
            alt="teton"
            style={{ height: '50px'}}/>
          <h6>2/ Deviens adhérent de Jeune & Rose</h6>
        </Row>
        <Row>
          <p align='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>      
        <Row style={{ paddingTop: '20px'}}>
          <img
            src={bigTeton}
            alt="teton"
            style={{ height: '50px'}}/>
          <h6>3/ Fais un don</h6>
        </Row>
        <Row>
          <p align='justify'>
          Il n'y a pas de petit montant! Tu donnes ce que tu veux et ce que tu peux!
          </p>
        </Row> 
      </Container>
    );
  }
}

export default Support;