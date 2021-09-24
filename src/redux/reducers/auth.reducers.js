import { authConstants } from "../constants"

const initialState = {
  token:null,
  user:{
    fName:'',
    lName:'',
    password:'',
    role:'',
    userName:'',
    email:''
  },
  authenticate:false,
  authenticating:false,
  loading:false,
  error:null,
  message:''
}

export default (state=initialState,action)=>{
  // console.log(action)
  switch(action.type){
    case authConstants.SIGNIN_REQUEST : 
      state = {
        ...state,
        authenticating:true
      }
      break;
    case authConstants.SIGNIN_SUCCESS : 
      state = {
        ...state,
        user:action.payload.user,
        token:action.payload.token,
        authenticate:true,
        authenticating:false
      }
      break;
    case authConstants.SIGNIN_FAILURE : 
      state = {
        ...state,
        error:action.payload.error,
        authenticate:false
      }
      break;
    case authConstants.SIGNOUT_REQUEST:
      state = {
        ...state,
        loading:true
      }
      break;
    case authConstants.SIGNOUT_SUCCESS:
      console.log('entered signout_success')
      state = {
        ...initialState,
        token:null,
        message:action.payload.message,
      }
      break;
    case authConstants.SIGNOUT_FAILURE:
      state = {
        ...state,
        loading:false,
      }
  }
  return state;
}