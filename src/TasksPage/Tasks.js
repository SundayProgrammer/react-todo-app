import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import { TaskBox } from '../_containers';
import './Tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  handleFilterClick = (event) => {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <div className="sidebar_holder">
            <div className="list_holder">
              <ul>
                <li className="filter" onClick={this.handleFilterClick}>
                  Today
                </li>
                <li className="filter" onClick={this.handleFilterClick}>
                  Next 7 days
                </li>
              </ul>
            </div>
        </div>
        <TaskBox tasks={this.daily} />
      </div>
    )
  }

  daily = [
      {
        date: '2018-08-07',
        tasks: [
          {
            id: 123,
            title: 'Default task which you do every noon',
            priority: 2,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-08-07',
            state: true
          },
          {
            id: 124,
            title: 'Default task which you do every enening',
            priority: 0,
            project: 'Project2',
            category: 'Category',
            comment: 'This is a little bit longer comment',
            date: '2018-08-07',
            state: true
          }
        ]
      },
      {
        date: '2018-08-06',
        tasks: [
          {
            id: 123,
            title: 'Default task which you do every noon',
            priority: 2,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-08-06',
            state: true
          },
          {
            id: 124,
            title: 'Default task which you do every enening',
            priority: 0,
            project: 'Project2',
            category: 'Category',
            comment: 'This is a little bit longer comment',
            date: '2018-08-06',
            state: true
          }
        ]
      },
      {
        date: '2018-08-05',
        tasks: [
          {
            id: 125,
            title: 'Default task which you do every morning',
            priority: 1,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-08-05',
            state: true
          }
        ]
      },
      {
        date: '2018-08-04',
        tasks: [
          {
            id: 126,
            title: 'Default task 1',
            priority: 1,
            project: 'Project',
            category: 'Category',
            comment: 'This is comment',
            date: '2018-08-04',
            state: true
          },
          {
            id: 122,
            title: 'Default task for Friday',
            priority: 0,
            project: 'Project 3',
            category: 'Bike riding',
            comment: 'This is comment unvisible',
            date: '2018-08-04',
            state: true
          }
        ]
      }
    ]
}

export { Tasks };
