import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {unicorns: [{ name: ''}] }

    this.unicornUpdater = this.unicornUpdater.bind(this);
    this.unicornSort = this.unicornSort.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(e) {
    let name = e.target.previousSibling.data;
    let value = e.target.value;
    console.log('name', name, 'value', value);
  }

  getUnicorns() {
    return fetch('http://localhost:5000/unicorn')
      .then(res => res.json())
      .catch(err => err);
  }

  unicornUpdater() {
    let data = this.state;
    console.log('I am happening')
    fetch('http://localhost:5000/unicorn', 
    {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}
    )
  }

  async componentWillMount() {
    let herd = await this.getUnicorns();
    this.setState({ unicorns: herd.unicorns})
  }

  // Sorts the unicorns based off location
  unicornSort(str) {
    return (
      <ul>
        { this.state.unicorns.map((unicorn) => {
          if( unicorn.location === str) {
            return (<li id={unicorn.name}>{unicorn.name} 
                <select onChange={this.updateLocation}>
                  <option value='Barn'>Barn</option>
                  <option value='Pasture'>Pasture</option>
                  <option value='Trail'>Trail</option>
                </select>
              </li>)
          } return <></>
        })}
      </ul>
    )
  }

  render() {
    return(
      <>
      <h3>Barn</h3>
        {this.unicornSort('Barn')}
      <h3>Pasture</h3>
      {this.unicornSort('Pasture')}
      <h3>Trail</h3>
      {this.unicornSort('Trail')}
      <button onClick={this.unicornUpdater}>Update me</button>
      </>
    )
  }
}

export default App;
