import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavLink, NavbarBrand } from "reactstrap";
import { userActions } from "../_actions";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({ isLogged: true });
    }
  }

  handleLogout() {
    const { dispatch } = this.props;

    dispatch(userActions.logout(this.props.history));
    this.setState({ isLogged: false });
  }

  render() {
    const { isLogged } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">ecfectus</NavbarBrand>
        {isLogged ? (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" onClick={this.handleLogout}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login/">Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup/">Sign up</NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    );
  }
}

export { AppNavbar };
