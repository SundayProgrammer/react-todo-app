import React, { Component } from 'react';
import {
  Navbar,
  NavItem,
  Nav,
  NavLink,
  NavbarBrand
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">ecfectus</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login/">Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup/">Sign up</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}

export { AppNavbar };
