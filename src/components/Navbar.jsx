import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
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
          <NavbarBrand href="/teleteton" style={{ color: '#1b1e3e' }}>Télététon 2018</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/teleteton/Events" style={{ color: '#1b1e3e' }}>Manifestations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/teleteton/Kesako" style={{ color: '#1b1e3e' }}>Kesako?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/teleteton/Support" style={{ color: '#1b1e3e' }}>Nous soutenir</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/jeuneetrose/" target="_blank"><img src={FB} alt="logo facebook" style={{ height: '3vh' }}/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/" target="_blank"><img src={insta} alt="logo instagram" style={{ height: '3vh' }}/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}