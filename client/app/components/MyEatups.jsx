import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class MyEatups extends React.Component {
	constructor(props) {
    super(props);
  }

  render () {
  	console.log(this.props.data);
  	return (
  		<Grid>
  			<Row className="show-grid">
  				<Col xs={6} md={4}>
  					<h2>Your Eatups</h2>
  					{this.props.data.map(restaurant => 
  						<div>
  						{restaurant.location}
  						</div>
  					)}
			  	</Col>
		  	</Row>
	  	</Grid>

  	)
  }
}


export default MyEatups;