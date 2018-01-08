import { combineReducers } from 'redux'
import { 
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  POST_VOTE_UP,
  POST_VOTE_DOWN,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT 
} from '../actions'

function postsByCategory( state = {}, action ) {

}

const rootReducer = combineReducers({
  postsByCategory
})

export default rootReducer