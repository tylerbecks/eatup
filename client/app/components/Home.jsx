import React from 'react'
import { Link } from 'react-router';

// const Home = () => <div><h1>Home</h1></div>

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/SignIn">SignIn</Link>
          <Link to="/SignUp">SignUp</Link>
        </nav>
        <div>
          <h1>Google Maps Page</h1>
        </div>
      </div>
    )
  }
}


export default Home;