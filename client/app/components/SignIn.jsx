import React from 'react'

class SignIn extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={7} sm={5} md={4} className="authComponent">
            <h1 className="welcome">Welcome Back</h1>
          </Col>
        </Row>
        
        <Form horizontal>
          <Row>
            <Col xs={7} sm={5} md={4} className="authComponent">
              <FormGroup controlId="formHorizontalEmail">
                <FormControl type="email" placeholder="Email address" onChange={this.onUserNameChange.bind(this)} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={7} sm={5} md={4} className="authComponent">
              <FormGroup controlId="formHorizontalPassword">
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={7} sm={5} md={4} className="authComponent">
              <FormGroup>
                  <Button type="submit" bsStyle="primary" block> Sign in </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Grid>
    )
  }
}


export default SignIn;