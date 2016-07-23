import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onUserNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit() {
    $.ajax({
            type:'POST',
            url: 'http://localhost:3000/users/signIn',
            data: JSON.stringify({username: this.state.username, password: this.state.password}),
            contentType: 'application/json',
            success: (username) => {
              console.log('success');
            }
          });
  }

  getValidationState() {
    
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={7} sm={5} md={4} className="authComponent">
            <h1 className="welcome">Welcome Back</h1>
          </Col>
        </Row>
        
        <Form horizontal>
          <FormGroup controlId="formHorizontalUsername">
            <Col xs={7} sm={5} md={4} className="authComponent">
              <FormControl type="text" placeholder="Username" onChange={this.onUserNameChange.bind(this)} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col xs={7} sm={5} md={4} className="authComponent">
              <FormControl type="password" placeholder="Password" onChange={ this.onPasswordChange.bind(this) }/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs={7} sm={5} md={4} className="authComponent">
              <Button onClick={ this.handleSubmit.bind(this) } type="submit" bsStyle="primary" block>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}


export default SignIn;