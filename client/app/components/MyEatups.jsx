import React from 'react';
import Button from 'react-bootstrap/lib/Button'

class MyEatups extends React.Component {
	constructor(props) {
    super(props);
  }

  render () {
  	return (
      <div>
    		<h2>Your Eatups</h2>
    		{this.props.data.map(restaurant => 
    			<div>
    			{restaurant.location}
    			</div>
    		)}
        <Button className="deleteButton" bsStyle="danger">Delete</Button>
      </div>
  	)
  }
}


export default MyEatups;