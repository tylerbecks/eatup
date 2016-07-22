import React, { Component } from 'react'
import GooglePlacesSuggest from 'react-google-places-suggest'
 
export default class Searchbar extends Component {
  componentDidMount() {
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'us'}};   
    new google.maps.places.Autocomplete(input, options);
  }

  buttonClick() {
    alert(this.refs.searchField.getDOMNode().value);
  }

  render() {
    return (
      <div>
        <input ref='searchField' id="searchTextField" type="text" size="50"/>
        <button onClick={this.buttonClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

// export default class Searchbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: '',
//       selectedCoordinate: null
//     }
//   }
 
//   handleSearchChange(e) {
//     this.setState({ search: e.target.value })
//   }
 
//   handleSelectSuggest(suggestName, coordinate) {
//     this.setState({ search: suggestName, selectedCoordinate: coordinate })
//   }
 
//   render() {
//     const { search } = this.state
 
//     return (
//       <GooglePlacesSuggest onSelectSuggest={ this.handleSelectSuggest.bind(this) } search={ search }>
//         <input
//           type="text"
//           value={ search }
//           placeholder="Search a location"
//           onChange={ this.handleSearchChange.bind(this) }
//         />
//       </GooglePlacesSuggest>
//     )
//   }
// }

