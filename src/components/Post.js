import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PropTypes from 'prop-types'

class Post extends Component {
  render() {
    return (
      <div className='test'>POST TEST</div>
    )
  }
}

export default connect(Post)