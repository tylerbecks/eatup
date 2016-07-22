import React from 'react'
import { Link } from 'react-router';
import MyNav from './Navbar.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedCoordinate: null
    }
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value })
    console.log(this.state.search) // setState is asynchronous, so this logged value is not updated
  }

  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <MyNav handleSearchChange={ this.handleSearchChange.bind(this) }/>
        <div className="container">
          <h1>Eatups around you!</h1>
        </div>
      </div>
    )
  }
}


export default Home;