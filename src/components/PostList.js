import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PropTypes from 'prop-types'
import '../styles/PostsPanel.css'

class PostList extends Component {

  componentDidMount() {
    const categoryFilter = ('category' in this.props.match.params)? this.props.match.params.category : 'all'
    console.log('categoryFilter set to: ' + categoryFilter)
    
    this.props.fetchPostList(categoryFilter)
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.match !== nextProps.match ) {
      this.forceUpdate()
      // I know this isn't a great pattern to use to trigger a component to render
      // but even after trying this I can't seem to get this guy to update 
      // when the route changes. I can't figure out what I'm missing and I feel
      // completely blocked until I can crack this.
    }
  }

  render() {
    const postList = this.props.postList || null
    
    return(
      <div className='post-list'>
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
  const postList = Object.keys(posts).map(function(key) {
    return posts[key]
  })
  return { postList }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPostList: (categoryFilter) => dispatch(fetchPosts( categoryFilter )),
  }
}

PostList.propTypes = {
  fetchPostList: PropTypes.func.isRequired,
  postList: PropTypes.array,
  match: PropTypes.object
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(PostList)