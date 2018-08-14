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
            La première campagne de sensibilisation au cancer du sein chez les jeunes femmes.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>

      </Container>
    );
  }
}

export default Kesako;