import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PropTypes from 'prop-types'
import '../styles/AddPost.css'

class AddPost extends Component {
  render() {
    return (
      <div className='add-post-form'>
        <h2>Add New Post</h2>
        <input type='text' name='title' placeholder='Title' id='title'/>
      </div>
    )
  }
}

AddPost.PropTypes = {

}

export default connect( 
  // mapStateToProps, 
  // mapDispatchToProps 
)(AddPost)