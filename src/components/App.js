import React, { Component } from 'react'
import logo from '../logo.png'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable App for Udacity</h1>
        </header>
        <nav></nav>
        <aside></aside>
        <section></section>
        <footer></footer>
      </div>
    )
  }
}

export default App
