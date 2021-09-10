import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {unicorns: [{ name: ''}] }
  }
  getUnicorns() {
    return fetch('http://localhost:5000/unicorn')
      .then(res => res.json())
      .catch(err => err);
  }
  async componentWillMount() {
    let herd = await this.getUnicorns();
    this.setState({ unicorns: herd.unicorns})
  }

  // Sorts the unicorns based off location
  unicornSort(arr, str) {
    return (
      <ul>
        { arr.map((unicorn) => {
          if( unicorn.location === str) {
            return (<li id={unicorn.name}>{unicorn.name}</li>)
          } return <></>
        })}
      </ul>
    )
  }

  render() {
    let listOfUnicorns = this.state.unicorns;
    return(
      <>
      <h3>Barn</h3>
        {this.unicornSort(listOfUnicorns, 'Barn')}
      <h3>Pasture</h3>
      {this.unicornSort(listOfUnicorns, 'Pasture')}
      <h3>Trail</h3>
      {this.unicornSort(listOfUnicorns, 'Trail')}
      </>
    )
  }
}

export default App;
