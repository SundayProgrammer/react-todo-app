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

    for (var i = 0; i < tasks.length; i++) {

    }

    const taskList = tasks.map(dailyTasks => dailyTasks.map(task => {

    }));

    <div>
      <h3>{title}</h3>
      <div>

      </div>
    </div>
  }
}
