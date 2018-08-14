import React from 'react';
import { Row, Col } from 'reactstrap';
import dlbc from '../img/dlbc.jpg';
import roche from '../img/roche.png';
import quintessence from '../img/quintessence.png';
import ars from '../img/ars.jpg';
import bergonie from '../img/bergonie.jpg';
import palmer from '../img/palmer.jpg';
import keepabreast from '../img/keepabreast.png';

const Footer = () => (
  <Row style={{ paddingTop: '30px', paddingBottom: '10px'}}>
    <Col><img src={dlbc} alt='logo dlbc' height='50vh'/></Col>
    <Col><img src={roche} alt='logo roche' height='50vh'/></Col>
    <Col><img src={quintessence} alt='logo quintessence' height='50vh'/></Col>
    <Col><img src={ars} alt='logo ars' height='50vh'/></Col>
    <Col><img src={bergonie} alt='logo bergonie' height='50vh'/></Col>
    <Col><img src={palmer} alt='logo palmer' height='50vh'/></Col>
    <Col><img src={keepabreast} alt='logo keepabreast' height='50vh'/></Col>
  </Row>
);

export default Footer;