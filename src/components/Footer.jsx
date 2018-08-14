import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dlbc from '../img/dlbc.jpg';
import roche from '../img/roche.png';
import quintessence from '../img/quintessence.png';
import ars from '../img/ars.jpg';
import bergonie from '../img/bergonie.jpg';
import palmer from '../img/palmer.jpg';
import keepabreast from '../img/keepabreast.png';

const Footer = () => (
  <Container>
    <Row style={{ paddingTop: '30px', paddingBottom: '10px'}}>
      <Col><img src={dlbc} alt='logo dlbc' style={{ height: '4vh' }}/></Col>
      <Col><img src={roche} alt='logo roche' style={{ height: '4vh' }}/></Col>
      <Col><img src={quintessence} alt='logo quintessence' style={{ height: '4vh' }}/></Col>
      <Col><img src={ars} alt='logo ars' style={{ height: '4vh' }}/></Col>
      <Col><img src={bergonie} alt='logo bergonie' style={{ height: '4vh' }}/></Col>
      <Col><img src={palmer} alt='logo palmer' style={{ height: '4vh' }}/></Col>
      <Col><img src={keepabreast} alt='logo keepabreast' style={{ height: '4vh' }}/></Col>
    </Row>
    <Row>
      <Col>Merci à nos partenaires pour leur soutien</Col>
    </Row>
  </Container>
);

export default Footer;