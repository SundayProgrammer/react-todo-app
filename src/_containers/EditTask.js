import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { taskActions } from '../_actions';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: (this.props.task
              ? this.props.task
              : this.emptyTask()
            ),
      initDate: moment().format("YYYY-MM-DD")
    };
  }

  emptyTask = () => {
    return {
      title: '',
      priority: 0,
      project: '',
      category: '',
      comment: '',
      date: '',
      state: true
    };
  }

  prevTask = this.emptyTask();

  componentDidMount() {
    this.prevTask = JSON.parse(JSON.stringify(this.props.task
            ? this.props.task
            : this.emptyTask()
          ));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let task = this.state.task;
    task[name] = value;
    this.setState({
      task
    });
  }

  handleDateChange = (date) => {
    this.setState({
      initDate: date
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    if ((JSON.stringify(this.prevTask) !== JSON.stringify(this.state.task))
          && (event.target.name !== 'cancel')) {
      dispatch(taskActions.update('task', this.state.task));
    } else {
      console.log(event.target);
    }
  }

  render() {
    const { title, priority, project, category, comment, date } = this.state.task;
    const { initDate } = this.state;

    return (
      <div>
        <Container>
          <Form method="POST" name="task_edit_form">
            <div className="submit-buttons">
              <FormGroup>
                <Button color="primary" onClick={this.handleSubmit} name="save" type="submit">Save</Button>{' '}
                <Button outline color="primary" onClick={this.handleSubmit} name="cancel" type="submit">Cancel</Button>
              </FormGroup>
            </div>
            <div className="row">
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" value={title || ''}
                       onChange={this.handleChange} autoComplete="title"/>
              </FormGroup>
            </div>
            <div className="row">
              <FormGroup>
                <Label for="category">Category</Label>
                <Input type="text" name="category" id="category" value={category || ''}
                       onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="project">Project</Label>
                <Input type="text" name="project" id="project" value={project || ''}
                       onChange={this.handleChange} autoComplete="project"/>
              </FormGroup>
              <div className="date-priority-pickers">
                {/* <DatePicker
                  dateFormat="YYYY-MM-DD"
                  selected={{initDate}}
                  onChange={this.handleDateChange}
                /> */}
                <div>
                  Priority picker
                </div>
              </div>
            </div>
            <div className="row">
              <FormGroup>
                <Label for="comment">Comment</Label>
                <Input type="text" name="comment" id="comment" value={comment || ''}
                  onChange={this.handleChange} autoComplete="comment"/>
              </FormGroup>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export { EditTask };
