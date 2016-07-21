import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

//Imports all of the different components
// import Home from './components/Home.jsx';
// import SignIn from './components/SignIn.jsx';
// import SignUp from './components/SignUp.jsx';
import myMap from './components/Map.jsx';


// class App extends React.Component {

//   render () {

//     return (
//       //Defines the routes for app and renders different components
//       <Router history={ hashHistory }>
//         <Route path="/" component={Home}></Route>
//         <Route path="SignIn" component={SignIn}></Route>
//         <Route path="SignUp" component={SignUp}></Route>
//         <Route path='Map' component={myMap}></Route>
//       </Router>
//     )
//   }
// }

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(myMap),
    document.getElementById('app')
  );
});
