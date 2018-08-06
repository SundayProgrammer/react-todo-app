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
    var title = "";
    var presentTasks = [], overdueTasks = [], futureTasks = [];

    var currentData = new Date(), today = currentData.getFullYear() + '-' + (currentData.getMonth() + 1) + '-' + currentData.getDate();

    const taskList = tasks.map( dailyTasks => {
      if (dailyTasks.date.localeCompare(today) === 0) {
        title = "Today";
        presentTasks.push(dailyTasks.tasks);
      } else if (dailyTasks.date.localeCompare(today) === -1) {
        title = "Overdue";
      } else {
        title = dailyTasks.date;
      }

      console.log(today);
      console.log(dailyTasks.date);

      return (
        <div>
          <h3>{title}</h3>
          <div>
            {
              dailyTasks.tasks.map(task => {
                return (
                  <Task task={task} />
                );
              })
            }
          </div>
        </div>
      );
    });

    console.log(taskList);

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
