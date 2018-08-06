import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import { TaskBox } from '../_containers';

class Tasks extends Component {

  daily = [
      {
        date: '2018-8-6',
        tasks: [
          {
            title: 'Default task which you do every noon',
            priority: 2,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-8-6',
            state: true
          },
          {
            title: 'Default task which you do every enening',
            priority: 0,
            project: 'Project2',
            category: 'Category',
            comment: 'This is a little bit longer comment',
            date: '2018-8-6',
            state: true
          }
        ]
      },
      {
        date: '2018-8-5',
        tasks: [
          {
            title: 'Default task which you do every morning',
            priority: 1,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-8-5',
            state: true
          }
        ]
      },
      {
        date: '2018-8-4',
        tasks: [
          {
            title: 'Default task 1',
            priority: 1,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-8-4',
            state: true
          },
          {
            title: 'Default task for Friday',
            priority: 0,
            project: 'Project 3',
            category: 'Bike riding',
            comment: 'This is comment unvisible',
            date: '2018-8-4',
            state: true
          }
        ]
      }
    ]

  render() {
    return (
      <div>
        <AppNavbar />
        <TaskBox tasks={this.daily} />
      </div>
    )
  }
}

export { Tasks };
