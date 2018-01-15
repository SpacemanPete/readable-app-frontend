import { 
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  POST_VOTE_UP,
  POST_VOTE_DOWN,
} from '../actions'

export default function posts( state = {}, action ) {
  switch (action.type) {
  case GET_POSTS_BY_CATEGORY :
    return state
    
  case ADD_POST :
    return state
  
  case EDIT_POST :
    return state
  
  case DELETE_POST :
    return state
  
  case POST_VOTE_UP :
    return state
  
  case POST_VOTE_DOWN :
    return state
  
  default :
    return state
  }
}