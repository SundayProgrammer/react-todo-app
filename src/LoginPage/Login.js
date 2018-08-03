import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

class Login extends Component {

  emptyForm = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props);

    this.state = {
      user: this.emptyForm,
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    let user = {...this.state.user};
    user[name] = value;
    this.setState({user});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state.user;
    const { dispatch } = this.props;
    this.setState({submitted: true});

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const {user, submitted} = this.state;

    return (
      <div>
        <AppNavbar />
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
            <FormGroup>
              <Button color="secondary" type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = withRouter(connect(mapStateToProps)(Login));
export { connectedLoginPage as Login };
