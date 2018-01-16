// Core
import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
// Visual
import logo from '../logo.png'
import '../styles/App.css'

// Redux
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts } from '../actions'
// Components
import AddPost from './AddPost'
import Post from './Post'

class App extends Component {

  state = {
    addPostFormVisible: false,
    categoryFilter: false
  }

  componentDidMount() {
    this.props.fetchCatList()
    this.props.fetchPostList()
  }
  
  openAddNewPostForm() {
    this.setState(() => ({
      addPostFormVisible: true
    }))
  }




  render() {
    const { addPostFormVisible, openAddNewPostForm } = this.state
    const { catList, postList } = this.props
    

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
        
        <aside id="categories" >
          <ul>
            {catList.map( (cat) => (
              <li className="cat-filter" key={cat.name}>
                <Link to={cat.path}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <section id="content">
          {addPostFormVisible && <AddPost />}
          <Route exact path="/" render={() => (
            <div className='post-list'>
              <ul>
                {postList.map( (post) => (
                  <li className="post-filter" key={post.title}>{post.title}</li>
                ) )}
              </ul>
            </div>
          )} />
          <Route path="/:category" render={() => (
            <div className='post-list'>
              <ul>
                {postList.map( (post) => (
                  <li className="post-filter" key={post.title}>{post.title}</li>
                ) )}
              </ul>
            </div>
          )} />
        </section>
        <footer>
          <div className="attribution">Built by <a href='https://github.com/SpacemanPete'>SpacemanDev</a> for Udacity's React Certificate Course</div>
        </footer>
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return { 
    catList: categories,
    postList: Object.keys(posts).map(function(key) {
      return posts[key]
    }) 
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchCatList: () => dispatch(fetchCategories()),
    fetchPostList: (categoryFilter) => dispatch(fetchPosts( categoryFilter )),
  }
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(App)
