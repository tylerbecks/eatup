import React from 'react';

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
      </div>
  	)
  }
}


export default MyEatups;