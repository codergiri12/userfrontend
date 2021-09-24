import React, { useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Redirect} from 'react-router';
import './Comp_css/SignIn.css'
import {signIn} from '../redux/actions/index';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';



function SignIn() {

  const dispatch = useDispatch();
  const [email,setEmail ]= useState('');
  const [password,setPassword] = useState('');
  const  [errors,setError] = useState('');

  
  const auth = useSelector(state => state.auth);
  const signInClicked = (e)=>{

    e.preventDefault();
    const user = {
      email:email,
      password:password,
      role:'user',
    }
    setEmail('');
    setPassword('')
    dispatch(signIn(user));
  }
  if(auth.authenticate){
    console.log("alknsflasfdln");
    return <Redirect to={'/users'} />
  }
 
  return (
    <div className="main__container">
      
      <div className="form__containerIn">
        <form onSubmit={signInClicked} >
          <h1>LogIn Form </h1>
          <div className="middle">
            <TextField
              required
              id="filled-required"
              value={email}
              className="common-field full"
              label="Email "
              onChange={(e)=>{setEmail(e.target.value)}}
              variant="filled"
            />
          </div>
          <div className="middle">
            <TextField
              required
              type="password"
              id="filled-required"
              value={password}
              className="common-field full"
              label="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
              variant="filled"
            />
          </div>
          <Button
          variant="contained"
          color="primary"
          type="submit"
          className="submit"
          endIcon={<SendRoundedIcon />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
