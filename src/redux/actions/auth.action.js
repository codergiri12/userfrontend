import { authConstants,userConstants } from "../constants"
import axios from '../../axiox'

export const signIn = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNIN_REQUEST
    })
    const res = await axios.post('/signin',user)
    console.log(res)
    
    if(res.status == 200){
      const {token,user} = res.data;
      localStorage.setItem('token',token);
      localStorage.setItem('user',user);
      dispatch({
        type:authConstants.SIGNIN_SUCCESS,
        payload:{
          token,user
        }
      })
    }else{
      console.log(res);
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{
          error:res.data
        }
      })
    }

  }
}
export const signingUp = (user)=>{
  return async(dispatch)=>{

    dispatch({
      type:userConstants.SIGNUP_REQUEST
    })
    console.log(user,'user')
    const resp = await axios.post('/signup',{
      ...user
    })
    console.log(resp)
    
    if(resp.status == 201){
      const message= 'User Added successfully';
      dispatch({
        type:userConstants.SIGNUP_SUCCESS,
        payload:{
          message
        }
      })
    }else if(resp.status == 400){
      console.log(resp,"helo");
      dispatch({
        type:userConstants.SIGNUP_FAILURE,
        payload:{
          error:resp
        }
      })
    }

  }
}
export const isUserLogged = ()=>{
  return (dispatch)=>{
    const token = localStorage.getItem('token');
    if(token){
      const user = localStorage.getItem('user');
      dispatch({
        type:authConstants.SIGNIN_SUCCESS,
        payload:{
          token,user
        }
      })
    }else{
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{
          message:"Not logged in before"
        }
      })
    }
  }
}
export const logoutAdmin = ()=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNOUT_REQUEST,
      payload:{
        message:'requesting to admin LOGOUT'
      },
    })
    const res = await axios.post('/admin/signout');
    console.log("res is  ",res);
    if(res.status === 200){
      localStorage.clear();
      console.log('removed token');
      dispatch({
        type:authConstants.SIGNOUT_SUCCESS,
        payload:{
          message:res.data.message
        }
      })
    }
    else{
      alert('hey not 200');
    }
  }
}