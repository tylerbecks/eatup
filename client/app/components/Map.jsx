import React from 'react';
import GoogleMap from 'google-map-react';

export default class myMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {lat: 37.7, lng: -122.4},
      zoom: 9
    }
  }

  render() {

    var mapStyle = {height: screen.height - 100};

    return (
      <div className='map-wrapper' style={mapStyle}>
        <GoogleMap center={this.state.center} zoom={this.state.zoom} > 
        </GoogleMap>
      </div>
    );
  }
};


