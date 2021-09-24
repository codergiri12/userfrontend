import { authConstants,postConstants } from "../constants"
import axios from '../../axiox'

export const CreatePost = (post)=>{
  return async (dispatch)=>{
    const res = await axios.post('/createpost',post)
    console.log(res)
    
    if(res.status == 201){
      dispatch({
        type:postConstants.ADD_NEW_POST_SUCCESS,
        payload:{
          newpost:res.data.post,
        }
      })
    }else{
      console.log(res);
      dispatch({
        type:postConstants.ADD_NEW_POST_FAILURE,
        payload:{
          error:res.data
        }
      })
    }

  }
}
export const getAllPosts = ()=>{
  return async (dispatch)=>{
    const res = await axios.get('/mypost')
    console.log(res,"these are all posts");
    
    if(res.status == 200){
      dispatch({
        type:postConstants.GET_MY_POSTS_SUCCESS,
        payload:{
          posts:res.data.posts,
        }
      })
    }else{
      console.log(res);
      dispatch({
        type:postConstants.GET_MY_POSTS_FAILURE,
        payload:{
          error:res.data
        }
      })
    }
  }
}