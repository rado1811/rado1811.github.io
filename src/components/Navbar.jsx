import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

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
          <NavbarBrand href="/teleteton" style={{ color: '#1b1e3e' }}>Teleteton</NavbarBrand>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}