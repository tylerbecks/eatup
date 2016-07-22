import React from 'react'
import { Link } from 'react-router';
import MyNav from './Navbar.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <MyNav />
        <div>
          <h1>Eatups around you!</h1>
        </div>
      </div>
    )
  }
}


export default Home;