import React, { Component } from 'react'
import logo from '../logo.png'
import '../styles/App.css'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable App for Udacity</h1>
        </header>
        <nav id="main-menu" >
          <Link to="/" className="font_large" >Home</Link>
          <Link to="add-post" className="font_large" >Add new post</Link>
        </nav>
        <aside id="categories" >
          <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
          </ul>
        </aside>
        <section id="content">
          <Route exact path="/" render={() => (
            <p>Here we render all the post content</p>
          )} />
          <Route path="/add-post" render={() => (
            <p>This is the Add Post dialoge</p>
          )} />
        </section>
        <footer>
          <div className="attribution">Built by <a href='https://github.com/SpacemanPete'>SpacemanDev</a> for Udacity's React Certificate Course</div>
        </footer>
      </div>
    )
  }
}

export default App
