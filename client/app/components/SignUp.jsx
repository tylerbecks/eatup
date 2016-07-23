import React from 'react';
import Form from 'react-bootstrap/lib/Form'; 
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

class SignUp extends React.Component {
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

  render () {
    return (
    	<Form horizontal>
    	  <FormGroup controlId="formHorizontalEmail">
    	    <Col componentClass={ControlLabel} sm={2}>
    	      Email
    	    </Col>
    	    <Col sm={10}>
    	      <FormControl type="email" placeholder="Email" onChange={this.onUserNameChange.bind(this)} />
    	    </Col>
    	  </FormGroup>

    	  <FormGroup controlId="formHorizontalPassword">
    	    <Col componentClass={ControlLabel} sm={2}>
    	      Password
    	    </Col>
    	    <Col sm={10}>
    	      <FormControl type="password" placeholder="Password" />
    	    </Col>
    	  </FormGroup>

    	  <FormGroup>
    	    <Col smOffset={2} sm={10}>
    	      <Button type="submit">
    	        Sign in
    	      </Button>
    	    </Col>
    	  </FormGroup>
    	</Form>
    )
  }
}

export default SignUp;
