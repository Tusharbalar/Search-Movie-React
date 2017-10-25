import React, { Component } from 'react';
// import './'
import * as api from '../api';
import List from '../list/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      searchText: '',
      year: ''
    }
  }

  fetch = () => {
    api.API('http://www.omdbapi.com/?t=Dhol&apikey=e260c91c').then((record) => {
      record.json().then((data) => {
        this.setState({ records: [data] });
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  onChange(e) {
    if (e.target.name === 'title') {
      this.setState({ searchText: e.target.value });
    } else if (e.target.name === 'year') {
      this.setState({ year: e.target.value });
    }
  }

  onFind(e) {
    e.preventDefault();
    if(this.state.searchText){
      let url = `http://www.omdbapi.com/?t=${this.state.searchText}&apikey=e260c91c`;
      if (this.state.year) {
        url = url + `&y=${this.state.year}`;
      }
      api.API(url).then((record) => {
        record.json().then((data) => {
          this.setState({ records: [data] });
        });
      });
    }
  }

  render() {
    const { records } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OmdbApi </h1>
        </header>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Title</label>
            <input type="text" className="form-control" name='title' placeholder="Title" onChange={(e) => this.onChange(e)} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Year</label>
            <input type="number" className="form-control" name='year' placeholder="Year" onChange={(e) => this.onChange(e)} />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={(e) => this.onFind(e)}>search</button>
        <br />
        { records[0] && records[0].Response !== 'False' ? <List records={records}/> : 'Records not found' }
       </div>
    );
  }
}

export default App;
