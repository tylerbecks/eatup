import React from 'react';
import Promise from 'bluebird';
import { Link } from 'react-router';
import MyNav from './Navbar.jsx';
import MyEatups from './MyEatups.jsx';
import ListOfEatUp from './Lists.jsx';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedCoordinate: null,
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
    this.setStateSync({
    eatUp: {
      username: 'Dan',
      locationName: place.name,
      address: place.formatted_address
    }
    }).then(function(eatUp) {
      console.log(this.state.eatUp);
    }.bind(this))
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
        <Grid>
          <Row>
            <Col xs={6} md={5} className="allEatups">
              <ListOfEatUp sessions = {this.state.sessions} />
            </Col>
            <Col xs={3} md={3} className="myEatups well">
              <MyEatups data = {this.state.data} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default Home;
