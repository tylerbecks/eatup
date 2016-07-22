import React from 'react';


class ListOfEatUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.sessions);
    var resultStuffs = this.props.sessions.map(result => <div> {result.location} </div>)
    return (
      <div>
      <h1>Hello</h1>
      {resultStuffs}
      </div>
    )
  }
}

export default ListOfEatUp;