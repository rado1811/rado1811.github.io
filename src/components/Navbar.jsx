import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import teleteton from '../img/teleteton_logo.png';
import FB from '../img/Facebook.svg';
import insta from '../img/insta.png';

export default class NavbarTT extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="pink" light expand="md">
          <NavbarBrand href="/"><img src={teleteton} alt="logo TeleTeTon" style={{ height: '8vh' }}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#/Events" style={{ color: '#1b1e3e' }}>Manifestations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#/Kesako" style={{ color: '#1b1e3e' }}>Kesako?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#/Support" style={{ color: '#1b1e3e' }}>Nous soutenir</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="https://www.facebook.com/jeuneetrose/" target="_blank"><img src={FB} alt="logo facebook" style={{ height: '3vh' }}/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="https://www.instagram.com/teleteton2018/" target="_blank"><img src={insta} alt="logo instagram" style={{ height: '3vh' }}/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}