import { 
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  POST_VOTE_UP,
  POST_VOTE_DOWN,
} from '../actions'

export default function posts( posts = {}, action ) {

  switch (action.type) {
  case RECEIVE_POSTS :
    return action.posts
    
  case ADD_POST :
    return action.posts
  
  case EDIT_POST :
    return action.posts
  
  case DELETE_POST :
    return action.posts
  
  case POST_VOTE_UP :
    return action.posts
  
  case POST_VOTE_DOWN :
    return action.posts
  
  default :
    return posts
  }
}