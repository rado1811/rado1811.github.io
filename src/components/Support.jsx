import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import bigTeton from '../img/tetonCoeur.png';
import YouTube from 'react-youtube';

class Support extends React.Component {
  render() {
    const opts = {
      height: '250vh',
      width: 'auto',
    };
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
          Tu as toujours rêvé de devenir une star? Tu chantes sous la douche? <br/>
          Et bien même si tu chantes comme une casserole, tu peux réaliser ta vidéo Télététon!</p>
        </Row>
        <Row>
          <p align='justify'>
          Voici les paroles: <br/>
          <i>Télététon (x4)<br/>
          Pour pas avoir de pépins dans tes citrons (x4)<br/>
          Faut qu'tu tattes (x2)<br/>
          Faut qu'tu tattes et qu'tu te mattes</i></p>
          <p align='justify'>
          Envoies nous ta vidéo pour que nous la diffusions sur les reséaux sociaux et surtout partage la aussi de ton côté pour sensibiliser tes amis au cancer du sein chez les jeunes femmes.</p>
        </Row>
        <Row>
          <YouTube
            videoId="ZYitvpqDa6c"
            opts={opts}
          />
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
          C'est gratuit, plus nous serons nombreux à soutenir la cause, plus nous ferons entendre notre voix.</p>
        </Row>
        <Row>
          <p align='justify'>
          Devenir adhérent, c'est par ici: <Button color="danger"><a style={{ color: '#FFFFFF' }} href='http://jeuneetrose.com/#haWidget' target="_blank" rel="noopener noreferrer">Adhérer</a></Button></p>
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