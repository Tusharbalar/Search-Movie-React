import React, { Component } from 'react';
// import './App.css';

class List extends Component {
  
  render() {
    const { records } = this.props;
    return (
      <div className="App">
        <ul className="list-group" >
          <li className="list-group-item">{records[0] && records[0].Actors}</li>
          <li className="list-group-item">{records[0] && records[0].Country}</li>
          <li className="list-group-item">{records[0] && records[0].Director}</li>
          <li className="list-group-item">{records[0] && records[0].Title}</li>
          <li className="list-group-item">{records[0] && records[0].type}</li>
        </ul>
      </div>
    );
  }
}

export default List;
