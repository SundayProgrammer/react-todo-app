import React, { Component } from 'react';
import { AppNavbar } from '../_components';
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { userActions } from '../_actions';
import './Registration.css';

class Registration extends Component {

  emptyForm = {
    email: '',
    password: '',
    agreement: false
  }

  constructor(props) {
    super(props);

    this.state = {
      user: this.emptyForm,
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {user} = this.state;
    const {dispatch} = this.props;
    this.setState({submitted: true});

    if (user.email && user.password && user.argeement) {
      dispatch(userActions.register(user));
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let user = {...this.state.user};
    user[name] = value;
    this.setState({user});
  }

  render() {
    const { user, submitted } = this.state;

    return (
      <div>
        <AppNavbar />
        <h1>Start your way.</h1>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email">EMAIL ADDRESS</Label>
              <Input type="text" name="email" id="email" value={user.email || ''}
                     onChange={this.handleChange} invalid={submitted && !user.email}/>
              {submitted && !user.email && <FormFeedback>Email is required</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="password">PASSWORD</Label>
              <Input type="password" name="password" id="password" value={user.password || ''}
                     onChange={this.handleChange} invalid={submitted && !user.password}/>
              {submitted && !user.password && <FormFeedback>Password is required</FormFeedback>}
            </FormGroup>
            <FormGroup check>
              <Label for="agreement"></Label>
              <Input type="checkbox" name="agreement" onChange={this.handleChange} id="agreement" invalid={submitted && !user.agreement}/>{' '}
              I agree to the terms of service and privacy policy
              {submitted && !user.agreement && <FormFeedback>Agreement is required</FormFeedback>}
            </FormGroup>
            <br />
            <FormGroup>
              <Button color="secondary" type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export { Registration };
