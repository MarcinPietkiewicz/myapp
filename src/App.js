import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {


  render() {
    return (
      <div className="App" >
        <h1> My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas name='ryu' age='25' belt='black' />
        <Ninjas name='yoshi' age='30' belt='green' />
      </div>)
  }
}

export default App;
