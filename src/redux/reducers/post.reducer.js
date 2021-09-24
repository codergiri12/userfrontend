import { postConstants } from "../constants";


const initialState = {
  posts:[],
}

export default (state=initialState,action)=>{
  // console.log(action)
  switch(action.type){
    case postConstants.ADD_NEW_POST_REQUEST : 
      break;
    case postConstants.ADD_NEW_POST_SUCCESS : 
      state = {
        ...state,
        posts:[...state.posts,action.payload.newpost]
      }
      break;
    case postConstants.ADD_NEW_POST_FAILURE : 
      state = {
        ...state,
        error:action.payload.error,
      }
      break;
    case postConstants.GET_MY_POSTS_SUCCESS : 
      state = {
        ...state,
        posts:[...action.payload.posts]
      }
      break;
    case postConstants.GET_MY_POSTS_FAILURE : 
      state = {
        ...state,
        error:action.payload.error,
      }
      break;
  }
  return state;
}