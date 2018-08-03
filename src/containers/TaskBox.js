import React, { Component } from 'react';
import { Task } from '../_components';

class TaskBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  render() {
    const { title, tasks } = this.props;

    var currentData = new Date(), today = currentData.getFullYear() + '-' + (currentData.getMonth() + 1) + '-' + currentData.getDate();

    const taskList = tasks.map( dailyTasks => {
      return (
        <h2>{}</h2>
        dailyTasks.map(task => {

        }
      )
    }));

    <div>
      <h3>{title}</h3>
      <div>

      </div>
    </div>
  }
}
