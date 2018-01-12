import { combineReducers } from 'redux'
import { 
  // GET_ALL_CATEGORIES,
  RECEIVE_CATEGORIES,
  // GET_POSTS_BY_CATEGORY,
  // GET_COMMENTS_FOR_POST,
  // ADD_POST,
  // EDIT_POST,
  // DELETE_POST,
  // POST_VOTE_UP,
  // POST_VOTE_DOWN,
  // ADD_COMMENT,
  // EDIT_COMMENT,
  // DELETE_COMMENT 
} from '../actions'

function categories( state = {}, action ) {
  console.info('REDUCER STATE', state)
  console.info('ACTION FROM REDUCER', action)  
  
  const { categories } = action

  switch (action.type) {
  case RECEIVE_CATEGORIES :
    return categories
  default :
    return state
  }
}

// function posts( state = {}, action ) {
//   switch (action.type) {
//   case GET_POSTS_BY_CATEGORY :
//     return state
//   default :
//     return state
//   }
// }

// function comments( state = {}, action ) {
//   switch (action.type) {
//   case GET_COMMENTS_FOR_POST :
//     return state
//   default :
//     return state
//   }
// }


const rootReducer = combineReducers({
  categories,
  // posts,
  // comments
})

export default rootReducer