import { 
  GET_COMMENTS_FOR_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT, 
} from '../actions'

export default function comments( state = {}, action ) {
  switch (action.type) {
  case GET_COMMENTS_FOR_POST :
    return state

  case ADD_COMMENT :
    return state

  case EDIT_COMMENT :
    return state

  case DELETE_COMMENT :
    return state
    
  default :
    return state
  }
}