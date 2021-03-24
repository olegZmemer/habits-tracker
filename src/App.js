import './styles/App.scss'
import Home from './pages/Home/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {auth} from './firebase'
import { useEffect } from 'react';
import {signInSuccess} from './store/auth/actions'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      dispatch(signInSuccess(user.uid))
    })
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = '/' exact component = {Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
