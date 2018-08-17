import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { AppNavbar } from "../_components";
import { TaskBox } from "../_containers";
import { taskActions } from "../_actions";
import "./Tasks.css";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      selectedFilter: "daily" // 'weekly'
    };
  }

  handleFilterClick = event => {
    event.preventDefault();

    this.setState({ selectedFilter: event.target.name });
  };

  componentDidMount() {
    const { dispatch, history } = this.props;
    dispatch(taskActions.getTasks("daily"));
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.selectedFilter !== state.selectedFilter) {
      const { dispatch, selectedFilter } = nextProps;
      dispatch(taskActions.getTasks(selectedFilter));
      return {
        ...state,
        selectedFilter: selectedFilter
      };
    } else if (nextProps.isFetching !== state.isFetching) {
      return {
        ...state,
        isFetching: nextProps.isFetching
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { isFetching, tasks, selectedFilter } = this.props;

    return (
      <div>
        <AppNavbar />
        <div className="sidebar_holder">
          <div className="list_holder">
            <ul>
              <li
                className="filter"
                name="daily"
                onClick={this.handleFilterClick}
              >
                Today
              </li>
              <li
                className="filter"
                name="weekly"
                onClick={this.handleFilterClick}
              >
                Next 7 days
              </li>
            </ul>
          </div>
        </div>
        {isFetching ? <p> Loading... </p> : <TaskBox tasks={tasks} />}
      </div>
    );
  }

  static propTypes = {
    isFetching: PropTypes.bool.isRequired
  };
}

const mapStateToProps = state => {
  const { selectedFilter, tasksByFilter } = state;
  const { isFetching, items: tasks } = tasksByFilter[selectedFilter] || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    tasks,
    selectedFilter
  };
};

const connectedTasks = connect(mapStateToProps)(Tasks);

export { connectedTasks as Tasks };
