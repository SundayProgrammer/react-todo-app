import React, { Component } from 'react';
import {
  Container,
  Button
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppNavbar">
        <Container>
          <Button color="secondary">Sign up</Button>
          <Button color="secondary">Log in</Button>
        </Container>
      </div>
    );
  }
}
