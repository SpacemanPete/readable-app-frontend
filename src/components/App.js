import React, { Component } from 'react'
import logo from '../logo.png'
import '../styles/App.css'
import { Route, Link, withRouter } from 'react-router-dom'
import CategoriesList from './CategoriesList'
import PostList from './PostList'
import AddPost from './AddPost'

class App extends Component {

  state = {
    addPostFormVisible: false
  }

  openAddNewPostForm() {
    this.setState(() => ({
      addPostFormVisible: true
    }))
    console.log('form visible', this.state);
    
  }


  render() {
    const { addPostFormVisible, openAddNewPostForm } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable App for Udacity</h1>
        </header>
        <nav id="main-menu" >
          <Link to="/" className="font_large" >Home</Link>
          <div id='add-new-post' 
               className="font_large" 
               onClick={() => this.openAddNewPostForm()} 
          >
            Add new post
          </div>
        </nav>
        <CategoriesList />
        <section id="content">
          {addPostFormVisible && <AddPost />}
          <Route exact path="/" component={PostList} />
          <Route path="/:category" component={PostList} />
        </section>
        <footer>
          <div className="attribution">Built by <a href='https://github.com/SpacemanPete'>SpacemanDev</a> for Udacity's React Certificate Course</div>
        </footer>
      </div>
    )
  }
}

export default withRouter(App)
