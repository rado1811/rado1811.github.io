import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import KesakoLogo from '../img/kesako.png';
import bigTeton from '../img/tetonCoeur.png';

class Kesako extends React.Component {
  render() { 
    return (
      <Container>
        <Row>
          <Col sm='12' md={{ size: 8, offset: 2 }} >
            <img
              src={KesakoLogo}
              alt="un cancer du sein avant tes 40 ans, ça t'étonne?"
              style={{ width: '100%', height: 'auto'}}/>
          </Col>
        </Row>
        <Row>
          <h3 style={{ padding: '10px'}}>
            Le TéléTéTon : la première campagne de sensibilisation au cancer du sein chez les jeunes femmes.
          </h3>
        </Row>
        <Row style={{ paddingTop: '20px'}}>
          <img
            src={bigTeton}
            alt="teton"
            style={{ height: '50px'}}/>
          <h6>JEUNE & ROSE: L'ASSOCIATION ORGANISATRICE</h6>
        </Row>
        <Row>
          <p align='justify'>
          Fondée en avril 2017, l'association <a href="http://jeuneetrose.com" target="_blank" rel="noopener noreferrer">Jeune & Rose</a> est un projet né de la rencontre de 2 jeunes femmes, Christelle Rakotoarimanana et Mélanie Courtier dans les couloirs de l’hôpital alors qu'elles étaient en pleine lutte contre un cancer du sein.
          A respectivement 32 et 31 ans, ces deux jeunes mamans ont fait face à la maladie avec beaucoup de questions et d'inquiétudes liées à leur situation sociale et familiale. Affronter un cancer du sein à cette période là de la vie nous met face à des problématiques et des difficultés très spécifiques. On a le même problème que toutes les femmes touchées par la maladie mais pas les mêmes problématiques.
          <br/>
          <a href="/teleteton/Support">N'hésitez pas à nous soutenir!</a>
          </p>
        </Row>
        <Row style={{ paddingTop: '20px'}}>
          <img
            src={bigTeton}
            alt="teton"
            style={{ height: '50px'}}/>
          <h6>LE PRINCIPE DU TELETETON</h6>
        </Row>
        <Row>
          <p align='justify'>
          La culture au service de la santé pour passer des messages forts de prévention sur un sujet bien précis : profiter d'Octobre Rose pour faire entendre la voix des jeunes femmes atteintes par un cancer du sein.<br/>
          Le TéléTéTon est constitué de nombreux évènements multi-publics avec des objectifs complémentaires : prévention pour les jeunes femmes, sensibilisation des professionnels de santé, soutien aux jeunes patientes.
          <br/>
          <a href="/teleteton/Events">L'évènement principal </a>se déroulera le samedi 6 octobre 2018 au Rocher de Palmer à Cenon avec notamment le concert du sein du groupe L.E.J. Des manifestation satellites se dérouleront en septembre et en octobre sur le département de la Gironde (Bordeaux, Cenon, Saint André de Cubzac, Blaye). 
          </p>
        </Row>
      </Container>
    );
  }
}

export default Kesako;