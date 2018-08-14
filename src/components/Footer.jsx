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
    <Row>
      <Col>Merci à nos partenaires pour leur soutien</Col>
    </Row>
    <Row style={{ paddingTop: '30px', paddingBottom: '10px'}}>
      <Col><a href='http://www.dlbc.fr/' target="_blank" rel="noopener noreferrer"><img src={dlbc} alt='logo dlbc' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.roche.fr/pharma/cancer/depistage-cancers-france.html' target="_blank" rel="noopener noreferrer"><img src={roche} alt='logo roche' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.tonnelleriequintessence.fr/' target="_blank" rel="noopener noreferrer"><img src={quintessence} alt='logo quintessence' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://www.ars.sante.fr/' target="_blank" rel="noopener noreferrer"><img src={ars} alt='logo ars' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://www.bergonie.fr/' target="_blank" rel="noopener noreferrer"><img src={bergonie} alt='logo bergonie' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://lerocherdepalmer.fr/' target="_blank" rel="noopener noreferrer"><img src={palmer} alt='logo palmer' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.keep-a-breast.fr/' target="_blank" rel="noopener noreferrer"><img src={keepabreast} alt='logo keepabreast' style={{ height: '4vh' }}/></a></Col>
    </Row>
  </Container>
);

export default Footer;