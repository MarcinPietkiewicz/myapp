import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'ryu', age: 25, belt: 'black', id: 1 },
      { name: 'yoshi', age: 30, belt: 'green', id: 2 },
      { name: 'crystal', age: 35, belt: 'pink', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1> My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>)
  }
}

export default App;
