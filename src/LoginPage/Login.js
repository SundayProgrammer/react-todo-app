import React, { Component } from 'react';
import { AppNavbar } from '../_components';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <div>
          Login component
        </div>
      </div>
    );
  }
}

export { Login };
