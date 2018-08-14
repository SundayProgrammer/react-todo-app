import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { AppNavbar } from '../_components';
import { TaskBox } from '../_containers';
import { taskActions } from '../_actions';
import './Tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksFilter: 'daily'      // 'weekly'
    }
  }

  handleFilterClick = (event) => {
    event.preventDefault();

    this.setState({ tasksFilter: event.target.name })
  }

  componentDidMount() {
    const { dispatch, history } = this.props;
    dispatch(taskActions.getTasks('daily', history));
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <div className="sidebar_holder">
          <div className="list_holder">
            <ul>
              <li className="filter" name="daily" onClick={this.handleFilterClick}>
                Today
              </li>
              <li className="filter" name="weekly" onClick={this.handleFilterClick}>
                Next 7 days
              </li>
            </ul>
          </div>
        </div>
        <TaskBox tasks={this.daily} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching } = state;

  return {
    isFetching
  }
}

export { Tasks };
