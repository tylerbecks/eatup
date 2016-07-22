import React from 'react';


class ListOfEatUp extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< 099368ea08e0e6b7d76cc6a2c1ac6c7340f0d139
  }

  render () {
    console.log(this.props.sessions);
    var resultStuffs = this.props.sessions.map(result => <div> {result.location} </div>)
    return (
      <div>
      <h1>Hello</h1>
      {resultStuffs}
=======
    this.state = {}
  }

  getdata () {
    $.ajax({
      method: 'GET',
      url: 'localhost:3000/sessions/allSessions'

    })
  }

  componentWillMount() {

  }

  render () {
    return (
      <div>
      <h1>Hello</h1>
>>>>>>> Begin incorporating jQuery ajax format
      </div>
    )
  }
}

export default ListOfEatUp;