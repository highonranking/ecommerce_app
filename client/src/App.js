import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/auth/Login.js';
import Register from './pages/auth/Register.js';
import Home from './pages/Home.js';
import Header from './components/nav/Header';
import RegisterComplete  from './pages/auth/RegisterComplete.js';

 
const App = ()  => {
  return (
   <>
    <Header />
    <ToastContainer/>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />

    </Switch>
   </>
  );
}

export default App;
