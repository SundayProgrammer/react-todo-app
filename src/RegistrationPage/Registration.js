import React, { Component } from 'react';
import { AppNavbar } from '../_components';

class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <div>
          Registration
        </div>
      </div>
    );
  }
}

export { Registration };
