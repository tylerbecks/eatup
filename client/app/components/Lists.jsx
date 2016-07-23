import React from 'react';


export default class ListOfEatUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var resultStuffs = this.props.sessions.map(result => <li className="list-group-item"> {result.location} </li>)
    return (
      <div>
        <h1>Eatups around you!</h1>
        <ul className="list-group eatupsList">
          {resultStuffs}
        </ul>
      </div>
    )
  }
}
