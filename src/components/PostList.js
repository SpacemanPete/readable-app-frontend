import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchPostsByCategory } from '../actions'
import PropTypes from 'prop-types'
import '../styles/PostsPanel.css'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPostList()
  }

  render() {
    const postList = this.props.postList || null
    
    return(
      <div className='post-ist'>
        <ul>
          {postList !== null && postList.map( (post) => (
            <li className="post-filter" key={post.title}>{post.title}</li>
          ) )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  console.log('Posts', posts)
  
  const postList = Object.keys(posts).map(function(key) {
    return posts[key]
  })
  return { postList }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPostList: () => dispatch(fetchAllPosts())
  }
}

PostList.propTypes = {
  fetchPostList: PropTypes.func.isRequired,
  postList: PropTypes.array
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(PostList)