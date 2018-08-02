import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import { Task } from '../_components';

class Tasks extends Component {

  task = {
    title: 'Default task which you do every morning',
    priority: 1,
    project: 'Project',
    category: 'Category',
    comment: 'This is comment'
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Task task={this.task} />
      </div>
    )
  }
}

export { Tasks };
