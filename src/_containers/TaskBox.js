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

    tasks.forEach(day => {
      if (day.date.localeCompare(today) === 0) {
        presentTasks.push(day.tasks);
      } else if (day.date.localeCompare(today) === -1) {
        overdueTasks.push(day.tasks);
      } else {
        futureTasks.push(day.tasks);
      }
    });

    console.log(presentTasks);
    console.log(futureTasks);
    console.log(overdueTasks);

    /*
     * Generates list of tasks composed of three time blocks:
     * - tasks for today
     * - overdue tasks
     * - future tasks
     */
    const taskList = () => {

      var presentTitle = "", overdueTitle = "";

      if (presentTasks.length) {
        presentTitle = "Today";
        var presentTasksList = presentTasks.map(day => {
          if (day.length) {
            return (
              <div>
                { day.map(task => {
                    return (
                      <Task task={task} />
                    );
                })}
              </div>
            );
          } else {
            return;
          }

        });

        var presentList = (
          <div>
            <h3>{presentTitle}</h3>
            {presentTasksList}
          </div>
        );
      }
      if (overdueTasks.length) {
        overdueTitle = "Overdue";
        var overdueTasksList = overdueTasks.map(day => {
          if (day.length) {
            return (
              <div>
                { day.map(task => {
                    return (
                      <Task task={task} />
                    );
                })}
              </div>
            );
          } else {
            return;
          }

        });

        var overdueList = (
          <div>
            <h3>{overdueTitle}</h3>
            {overdueTasksList}
          </div>
        );
      }
      if (futureTasks.length) {
        var futureList = futureTasks.map(day => {

          if (day.length) {
            title = day.date;
            return (
              <div>
                <h3>{title}</h3>
                <div>
                  { day.map(task => {
                      return (
                        <Task task={task} />
                      );
                  })}
                </div>
              </div>
            );
          } else {
            return;
          }

        });
      }

      return (
        <div>
          {overdueTasks.length
            ? <div>
              {overdueList}
              </div>
            : <div></div>}
          {presentTasks.length
            ? <div>
              {presentList}
            </div>
            : <div></div>}
          {futureTasks.length
            ? <div>
              {futureList}
            </div>
           : <div></div>}
        </div>
      );
    };

    // console.log(taskList);

    return (
      <div>
        <h3>{}</h3>
        <div>
          {taskList()}
        </div>
      </div>
    );
  }
}

export { TaskBox };
