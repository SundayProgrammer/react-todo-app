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
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class EditTask extends Component {
  constructor(props) {
    super(props);

    if (this.props.task) {
      this.state = {
        ...this.props.task
      };
    } else {
      this.state = {
        ...this.emptyTask()
      };
    }
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

  handleChange = (event) => {

  }

  render() {
    const { title, priority, project, category, comment, date } = this.state;

    return (
      <div>
        <Container>
          <Form>
            <div className="submit-buttons">
              <FormGroup>
                <Button color="secondary" type="submit">Save</Button>{' '}
                <Button outline color="secondary" tag={Link} to="/tasks">Cancel</Button>
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
                       onChange={this.handleChange} autoComplete="category"/>
              </FormGroup>
              <FormGroup>
                <Label for="project">Project</Label>
                <Input type="text" name="project" id="project" value={project || ''}
                       onChange={this.handleChange} autoComplete="project"/>
              </FormGroup>
              <div className="date-priority-pickers">
                <DatePicker
                  dateFormat="YYYY-MM-DD"
                  selected={this.state}
                  onChange={this.handleChange}
                />
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
