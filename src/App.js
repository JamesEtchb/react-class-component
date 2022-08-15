import React, { Component } from 'react'
import './App.css'
import FunctionalComponent from './FunctionalComponent.js'
import ClassComponent from './ClassComponent'

let count = 1
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Components go here
          <br />
          <FunctionalComponent count={count} />
          <br />
          <ClassComponent count={count} />
        </header>
      </div>
    )
  }
}

export default App
