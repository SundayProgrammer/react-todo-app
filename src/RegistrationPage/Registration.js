import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { AppNavbar } from "../_components";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { userActions } from "../_actions";
import "./Registration.css";

class Registration extends Component {
  emptyForm = {
    email: "",
    password: "",
    agreement: false
  };

  constructor(props) {
    super(props);

    this.state = {
      user: this.emptyForm,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state.user;
    const { agreement } = this.state.user;
    const { user } = this.state;
    const { dispatch } = this.props;
    this.setState({ submitted: true });

    if (email && password && agreement) {
      dispatch(userActions.register(user, this.props.history));
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    let user = { ...this.state.user };

    if (name !== "agreement") {
      const { value } = event.target;
      user[name] = value;
    } else {
      user[name] = !this.state.user.agreement;
    }
    this.setState({ user });
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
              <Input
                type="text"
                name="email"
                id="email"
                value={user.email || ""}
                onChange={this.handleChange}
                invalid={submitted && !user.email}
              />
              {submitted &&
                !user.email && <FormFeedback>Email is required</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="password">PASSWORD</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={user.password || ""}
                onChange={this.handleChange}
                invalid={submitted && !user.password}
              />
              {submitted &&
                !user.password && (
                  <FormFeedback>Password is required</FormFeedback>
                )}
            </FormGroup>
            <FormGroup check>
              <Label for="agreement" />
              <Input
                type="checkbox"
                name="agreement"
                onChange={this.handleChange}
                id="agreement"
                checked={user.agreement}
                invalid={submitted && !user.agreement}
              />{" "}
              I agree to the terms of service and privacy policy
              {submitted &&
                !user.agreement && (
                  <FormFeedback>Agreement is required</FormFeedback>
                )}
            </FormGroup>
            <br />
            <FormGroup>
              <Button color="secondary" type="submit">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegistrationPage = withRouter(
  connect(mapStateToProps)(Registration)
);
export { connectedRegistrationPage as Registration };
