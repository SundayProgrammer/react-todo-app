import React, { Component } from 'react';
import { Task } from '../_components';
import { Container } from 'reactstrap';
import './TaskBox.css';

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

    var currentData = new Date(), today = currentData.getFullYear() + '-' + ('0' + (currentData.getMonth()+1)).slice(-2) + '-' + ('0' + currentData.getDate()).slice(-2);

    console.log(today);

    tasks.forEach(day => {
      if (day.date.localeCompare(today) === 0) {
        presentTasks.push(day.tasks);
      } else if (day.date.localeCompare(today) === -1) {
        overdueTasks.push(day.tasks);
      } else {
        futureTasks.push(day.tasks);
      }
    });

    sessionStorage.setItem('presentTasks', presentTasks);
    sessionStorage.setItem('futureTasks', futureTasks);
    sessionStorage.setItem('overdueTasks', overdueTasks);

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
              <ul className="present_task_list">
                { day.map(task => {
                    return (
                      <li className="task_item">
                        <Task task={task} />
                      </li>
                    );
                })}
              </ul>
            );
          } else {
            return;
          }
        });

        var presentList = (
          <div className="task_group">
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
              <ul className="present_task_list">
                { day.map(task => {
                    return (
                      <li className="task_item">
                        <Task task={task} />
                      </li>
                    );
                })}
              </ul>
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
                <div class="row">
                  <h3>{title}</h3>
                </div>
                <ul className="future_task_list">
                  { day.map(task => {
                      return (
                        <li className="task_item">
                          <Task task={task} />
                        </li>
                      );
                  })}
                </ul>
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
        <Container>
          <div>
            {taskList()}
          </div>
        </Container>
      </div>
    );
  }
}

export { TaskBox };
