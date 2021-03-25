import './styles/App.scss'
import Home from './pages/Home/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase'
import { useEffect } from 'react';
import {signInSuccess} from './store/auth/actions'
import PrivateRoute from './auth/PrivateRoute'
import Habits from './pages/Habits/Habits'
function App() {
  const authed = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(signInSuccess(user.uid))
      }
    })
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <PrivateRoute path ='/habits' authed = {authed} component={Habits}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
