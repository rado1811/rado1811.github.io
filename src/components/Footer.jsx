import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dlbc from '../img/dlbc.jpg';
import roche from '../img/roche.png';
import quintessence from '../img/quintessence.png';
import ars from '../img/ars.jpg';
import bergonie from '../img/bergonie.jpg';
import palmer from '../img/palmer.jpg';
import keepabreast from '../img/keepabreast.png';
import saintAndre from '../img/saintandre.jpg';

const Footer = () => (
  <Container>
    <Row>
      <Col><b><i>Merci à tous nos partenaires !</i></b></Col>
    </Row>
    <Row style={{ paddingTop: '30px', paddingBottom: '10px'}}>
      <Col><a href='http://www.dlbc.fr/' target="_blank" rel="noopener noreferrer"><img src={dlbc} alt='logo dlbc lubrifiants' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.roche.fr/pharma/cancer/depistage-cancers-france.html' target="_blank" rel="noopener noreferrer"><img src={roche} alt='logo laboratoires roche' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.tonnelleriequintessence.fr/' target="_blank" rel="noopener noreferrer"><img src={quintessence} alt='logo tonnellerie quintessence' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://www.nouvelle-aquitaine.ars.sante.fr/' target="_blank" rel="noopener noreferrer"><img src={ars} alt='logo agence regionale de santé nouvelle aquitaine' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://www.bergonie.fr/' target="_blank" rel="noopener noreferrer"><img src={bergonie} alt='logo institut bergonie' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='https://lerocherdepalmer.fr/' target="_blank" rel="noopener noreferrer"><img src={palmer} alt='logo rocher de palmer' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.keep-a-breast.fr/' target="_blank" rel="noopener noreferrer"><img src={keepabreast} alt='logo association keepabreast' style={{ height: '4vh' }}/></a></Col>
      <Col><a href='http://www.saintandredecubzac.fr/' target="_blank" rel="noopener noreferrer"><img src={saintAndre} alt='logo ville saint andre de cubzac' style={{ height: '4vh' }}/></a></Col>
    </Row>
  </Container>
);

export default Footer;