import { 
  GET_ALL_CATEGORIES,
} from '../actions'

export default function categories( state = {}, action ) {
  const { categories } = action

  switch (action.type) {
  case GET_ALL_CATEGORIES :
    return categories
  default :
    return state
  }
}