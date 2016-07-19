import React from 'react';


class NavBar extends React.Component {

  render () {
    return (
      <nav>
        <button //onClick={} //Modal that should populate and do stuff
        >
          Generate a meet up!
        </button>
        <button //onClick={} //Take the user to the login screen
        >
          Login
        </button>
        <button //onClick={} //Take the user to the Sign Up page?? How does that work with React?
        >
          Sign Up
        </button>
      </nav>
    )
  }

}

export default NavBar;