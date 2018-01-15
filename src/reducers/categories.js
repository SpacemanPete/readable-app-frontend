import { 
  GET_ALL_CATEGORIES,
} from '../actions'

export default function categories( state = {}, action ) {
  const { categories } = action

  switch (action.type) {
  case GET_ALL_CATEGORIES :
    // This spread operator makes for the most baffling syntax. 
    // Try as I might I have such a hard time grokking.
    // I threw spaghetti at the wall for hours getting this to work
    // I read it now and I still can't describe it in English, sigh...
    return {
      ...state,
      ...categories
    }
  default :
    return state
  }
}