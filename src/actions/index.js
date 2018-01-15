import * as ReadableAPI from '../utils/api'

/** 
 * 
 *  CATEGORY RELATED ACTIONS
 * 
*/
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const fetchCategories = () => dispatch => (
  ReadableAPI
    .getAllCategories()
    .then(categories => dispatch(receiveCategories(categories)))
)
export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})


/**
 * 
 *  POST RELATED ACTIONS
 * 
 */

// export const GET_ALL_POSTS = 'GET_ALL_POSTS'
// export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const POST_VOTE_UP = 'POST_VOTE_UP'
export const POST_VOTE_DOWN = 'POST_VOTE_DOWN'

export const fetchAllPosts = () => dispatch => (
  ReadableAPI
    .getAllPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const fetchPostsByCategory = () => dispatch => (
  ReadableAPI
    .getPostsByCategory()
    .then(posts => dispatch(receivePosts(posts)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})
// export function getPostsByCategory() {
//   return {
//     type: GET_POSTS_BY_CATEGORY
//   }
// }

// export function getCommentsForPost() {
//   return {
//     type: GET_COMMENTS_FOR_POST
//   }
// }

// export function addPost ({ id, timestamp, title, body, author, category }) {
//   return {
//     type: ADD_POST,
//     id: id,
//     timestamp: timestamp,
//     title: title,
//     body: body,
//     author: author,
//     category: category,
//     voteScore: 1,
//     deleted: false,
//     commentCount: 0
//   }
// }
// export function editPost ({}) {
//   return {
//     type: EDIT_POST,

//   }
// }
// export function deletePost ({}) {
//   return {
//     type: DELETE_POST,

//   }
// }
// export function voteUp ({}) {
//   return {
//     type: POST_VOTE_UP,

//   }
// }
// export function voteDown ({}) {
//   return {
//     type: POST_VOTE_DOWN,

//   }
// }


// /** 
//  * 
//  *  COMMENT RELATED ACTIONS
//  * 
// */

export const GET_COMMENTS_FOR_POST = 'GET_COMMENTS_FOR_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// export function addComment ({}) {
//   return {
//     type: ADD_COMMENT,

//   }
// }
// export function editComment ({}) {
//   return {
//     type: EDIT_COMMENT,

//   }
// }
// export function deleteComment ({}) {
//   return {
//     type: DELETE_COMMENT,

//   }
// }