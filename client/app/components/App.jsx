import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import NavBar from './NavBar.jsx';

// File that is getting 
class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <AwesomeComponent />
      </div>
    )
  }
}


export default App;