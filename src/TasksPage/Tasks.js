import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import { Task } from '../_components';

class Tasks extends Component {

  tasks = [
    {
      title: 'Default task which you do every morning',
      priority: 1,
      project: 'Project',
      category: 'Category',
      comment: 'This is comment',
      date: '2018-08-02',
      state: true
    },
    {
      title: 'Default task which you do every noon',
      priority: 2,
      project: 'Project',
      category: 'Category',
      comment: 'This is comment',
      date: '2018-08-03',
      state: true
    },
    {
      title: 'Default task which you do every enening',
      priority: 0,
      project: 'Project2',
      category: 'Category',
      comment: 'This is a little bit longer comment',
      date: '2018-08-03',
      state: false
    }
  ];

  render() {
    return (
      <div>
        <AppNavbar />
        <Task task={this.tasks} />
      </div>
    )
  }
}

export { Tasks };
