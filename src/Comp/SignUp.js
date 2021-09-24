import React, { useState } from 'react'
import { Redirect} from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import './Comp_css/SignUp.css'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { signingUp } from '../redux/actions';

function SignUp() {

  const [email,setEmail ]= useState('')
  const [password,setPassword] = useState('');
  const [fName,setfName ]= useState('');
  const [lName,setlName] = useState('');

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  const auth = useSelector(state => state.auth);
  if(auth.authenticate){
    return <Redirect to={'/users'} />
  }
  // if(user.loading){
  //   return <p>Loading....</p>
  // }
  if(user.success){
    return <Redirect to={'/signin'} />
  }
  const signUpClicked = (e)=>{
    e.preventDefault();
    const user = {
      fName:fName,
      lName:lName,
      email:email,
      password:password
    }
    dispatch(signingUp(user));
    setfName('');
    setlName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="main__container">
      <div className="form__containerUp">
        <form onSubmit={signUpClicked} >
          <h1>Sign Up Form </h1>
          <div className="top">
            <TextField
              required
              label="First Name"
              value={fName}
              onChange={(e)=>{setfName(e.target.value)}}
              variant="filled"
              className="common-field"
            />
            <TextField
              required
              label="Last Name"
              value={lName}
              onChange={(e)=>{setlName(e.target.value)}}
              variant="filled"
              className="common-field"
            />
          </div>
          <div className="middle">
            <TextField
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="common-field full"
              label="Email "
              size="small"
              variant="filled"
            />
          </div>
          <div className="middle">
            <TextField
              required
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="common-field full"
              label="Password"
              size="small"
              variant="filled"
            />
          </div>
          <Button
          variant="contained"
          color="primary"
          type="submit"
          className="submitUp"
          endIcon={<SendRoundedIcon />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
