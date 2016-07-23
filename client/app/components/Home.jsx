import React from 'react'
import { Link } from 'react-router';
import MyNav from './Navbar.jsx';
import MyEatups from './MyEatups.jsx';
import ListOfEatUp from './Lists.jsx';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedCoordinate: null,
      eatUp: {},
      data: [],
      sessions: []
    }
  }

  componentWillMount() {
    this.getData();
    this.getAllSessions();
  }

  componentDidMount() {
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'us'}};   
    this.setState({ autocomplete: new google.maps.places.Autocomplete(input, options) });
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value })
  }

  handleSubmit() {
    // post this.state.search to database
    var place = this.state.autocomplete.getPlace();
    this.setState({
      eatUp: {
        username: 'Dan',
        locationName: place.name,
        address: place.formatted_address
      }
    })
    console.log(this);
  }

  getData () {
    $.ajax({
      type:'GET',
      url: 'http://localhost:3000/sessions/userSessions',
      success: (data) => {
        this.setState({
          data: data
        });
      }
    });
  };

  getAllSessions () {
    $.ajax({
      type:'GET',
      url: 'http://localhost:3000/sessions/allSessions',
      success: (sessions) => {
        this.setState({
          sessions: sessions
        });
      }
    });
  }


  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <MyNav handleSearchChange={ this.handleSearchChange.bind(this) } 
               handleSubmit={ this.handleSubmit.bind(this) } />
        <div className="container">
          <h1>Eatups around you!</h1>
        </div>
        <Grid>
          <Row>
            <Col xs={5} md={4}>
              <ListOfEatUp sessions = {this.state.sessions} />
            </Col>
            <Col xs={5} md={4}>
              <MyEatups data = {this.state.data} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Home;
