import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  getUnicorns() {
    fetch('http://localhost:5000/unicorn')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => err);
  }
  componentDidMount() {
    this.getUnicorns();
  }
  render() {
    return(
      <React.Fragment>
      <div>
        <h3>Barn</h3>
        <p> { this.state.unicorns[0].Barn[0].Name } </p>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
