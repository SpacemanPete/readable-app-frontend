import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Post extends Component {
  render() {
    const post = this.props.post

    return (
      <div className='post'>
        <div className='title'>{post.title}</div>
        
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post