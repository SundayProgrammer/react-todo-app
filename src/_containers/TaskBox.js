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
    const { tasks } = this.props;

    var currentData = new Date(), today = currentData.getFullYear() + '-' + (currentData.getMonth() + 1) + '-' + currentData.getDate();

    const taskList = tasks.map( dailyTasks => {
      return (
        <div>
          <h2>{}</h2>
          <div>
            <Task task={dailyTasks} />
            {/* {dailyTasks.map(task => {
              <Task task={task} />
            })} */}
          </div>
        </div>
      );
    });

    return (
      <div>
        <h3>{}</h3>
        <div>
          {taskList}
        </div>
      </div>
    );
  }
}

export { TaskBox };
