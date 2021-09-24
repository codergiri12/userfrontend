import React, { useEffect } from 'react'
import './App.css';
import { useSelector , useDispatch } from 'react-redux'
import {getAllPosts, isUserLogged} from './redux/actions/index';
import {Switch,Route} from "react-router-dom";


import Header from './Comp/Header'
import PrivateRoute from './Comp/PrivateRoute'
import SignUp from './Comp/SignUp'
import SignIn from './Comp/SignIn'
import Main_Dash from './Comp/Dash_comp/Main_Dash';
import Dash_Posts from './Comp/Dash_comp/Dash_Posts';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(()=>{    
    if(!auth.authenticate){
      dispatch(isUserLogged());
    }
    dispatch(getAllPosts());
  },[])
  return (
    <>
      <Switch>
        <PrivateRoute path='/users' exact component={Main_Dash} />
        <PrivateRoute path='/posts' component={Dash_Posts} />
        <Route exact path='/' >
          <Header /><SignIn /> 
        </Route>
        <Route path='/signin' >
          <Header /><SignIn /> 
        </Route>
        <Route path='/signup' >
          <Header/><SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
