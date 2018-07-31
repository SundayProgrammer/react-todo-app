import React, { Component } from 'react';
import { AppNavbar } from '../_components';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import './Registration.css';

class Registration extends Component {

  emptyForm = {
    email: '',
    password: '',
    agreement: ''
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
    this.setState({submitted: true});

    if (user.email && user.password && user.argeement) {

    }
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include'
    });
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
                     onChange={this.handleChange} autoComplete="address-level1"/>
              {submitted && !user.email && <div className="help-block">Email is required</div>}
            </FormGroup>
            <FormGroup>
              <Label for="password">PASSWORD</Label>
              <Input type="password" name="password" id="password" value={user.password || ''}
                     onChange={this.handleChange} autoComplete="password"/>
              {submitted && !user.password && <div className="help-block">Password is required</div>}
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                I agree to the terms of service and privacy policy
              </Label>
              {submitted && !user.agreement && <div className="help-block">Agreement is required</div>}
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
