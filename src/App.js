import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'ryu', age: 20, belt: 'black', id: 1 },
      { name: 'yoshi', age: 25, belt: 'green', id: 2 },
      { name: 'crystal', age: 30, belt: 'pink', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1> My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>)
  }
}

export default App;
