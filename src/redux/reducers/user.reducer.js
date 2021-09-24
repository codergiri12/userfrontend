import { userConstants } from "../constants"

const initialState = {
  error:null,
  user:{
    fName:'',
    lName:'',
    password:'',
    role:'admin',
    userName:'',
    email:''
  },
  loading:false,
  success:false,
}

export default (state=initialState,action)=>{
  // console.log(action,"inside user.reducer.js")
  switch(action.type){
    case userConstants.SIGNUP_REQUEST : 
      state = {
        ...state,
        loading:true
      }
      break;
    case userConstants.SIGNUP_SUCCESS : 
      state = {
        ...state,
        message:action.payload.message,
        loading:false,
        success:true,
      }
      break;
    case userConstants.SIGNUP_FAILURE : 
      state = {
        ...state,
        error:action.payload.error,
        loading:false
      }
      break;
  }
  return state;
}