import React from 'react'
import { Link } from 'react-router';
import MyNav from './Navbar.jsx';
import MyEatups from './MyEatups.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedCoordinate: null,
      data: []
    }
  }

  componentWillMount() {
    this.getData();
  }

  componentDidMount() {
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'us'}};   
    this.setState({ autocomplete: new google.maps.places.SearchBox(input, options) });
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value })
    console.log(this.state.search) // setState is asynchronous, so this logged value is not updated
  }

  handleSubmit() {
    // post this.state.search to database
    var place = this.state.autocomplete.getPlaces()[0];
    console.log('Name: ' + place.name, 'Formateed Address: ' + place.formatted_address);
  }

  getData () {
    $.ajax({
      type:'GET',
      url: 'http://localhost:3000/sessions/userSessions',
      success: (data) => {
        console.log('im here');
        this.setState({
          data: data
        });
      }
    });
  };

  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <MyNav handleSearchChange={ this.handleSearchChange.bind(this) } 
               handleSubmit={ this.handleSubmit.bind(this) }/>
        <div className="container">
          <h1>Eatups around you!</h1>
        </div>
        <div>
            <MyEatups data = {this.state.data}/>
        </div>       
      </div>
    )
  }

}






