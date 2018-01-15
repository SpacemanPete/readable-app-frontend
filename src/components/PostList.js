import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchPostsByCategory } from '../actions'
import PropTypes from 'prop-types'
import '../styles/PostsPanel.css'

class PostList extends Component {

  componentDidMount() {
    if ('category' in this.props.match.params ) {
      this.props.fetchPostsByCategory(this.props.match.params.category)
    }
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

function mapStateToProps({ posts }, props) {
  console.log('props', props)
  console.log('category', props.match.params)
  
  
  const postList = Object.keys(posts).map(function(key) {
    return posts[key]
  })
  return { postList }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPostList: () => dispatch(fetchAllPosts()),
    fetchPostsByCategory: () => dispatch(fetchPostsByCategory())
  }
}

PostList.propTypes = {
  fetchPostList: PropTypes.func.isRequired,
  fetchPostsByCategory: PropTypes.func.isRequired,
  postList: PropTypes.array,
  match: PropTypes.object
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(PostList)