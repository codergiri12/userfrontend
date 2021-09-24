import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { CreatePost } from '../../redux/actions'
const Add_Posts = ()=>{
    const dispatch = useDispatch();
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const postDetails = ()=>{
      const data ={
        title:title,
        body:body,
        approved:'Pending',
      };
      dispatch(CreatePost(data));
      setTitle("");
      setBody("");
    }
    return(
       <>
       <h1>Add new Post</h1>
       <div className="card input-filed"
          style={{
              margin:"30px auto",
              maxWidth:"500px",
              padding:"20px",
              textAlign:"center"
          }}
        >
          <div className="row">
            <input 
              type="text"
              placeholder="title"
              className="form-control"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <br />
         <div className="row">
          <input
            type="text"
            placeholder="body"
            className="form-control"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          />
         </div>
         <br />
          <button className="btn btn-primary" onClick={()=>postDetails()}>
              Submit post
          </button>
       </div>
       </>
   )
}


export default Add_Posts