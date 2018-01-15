import React, { Component } from 'react'
import logo from '../logo.png'
import '../styles/App.css'
import { Route, Link } from 'react-router-dom'
import CategoriesList from './CategoriesList'
import PostList from './PostList'

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
        <CategoriesList />
        <section id="content">
          <Route exact path="/" component={PostList} />
          <Route path="/add-post" render={() => (
            <p>This is the Add Post dialoge</p>
          )} />
          <Route path="/:category" component={PostList} />
        </section>
        <footer>
          <div className="attribution">Built by <a href='https://github.com/SpacemanPete'>SpacemanDev</a> for Udacity's React Certificate Course</div>
        </footer>
      </div>
    )
  }
}

export default App
