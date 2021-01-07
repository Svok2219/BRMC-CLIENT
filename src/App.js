import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './Components/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import Login from './Components/Login/Login';
import "tailwindcss/tailwind.css"
import Nomatch from "./Components/Nomatch/Nomatch";
import Privateoute from "./Components/PrivateRoute/Privateoute";
import StudentData from "./Components/Static/StudentData";
import Afterlogin from "./Components/Afterlogin/Afterlogin";
export const Context=createContext()

function App() {
  const [Loggedin,setLoggedin]=useState({})

  return (
    <Context.Provider value={[Loggedin,setLoggedin]}>

      <Router>
        <Switch>
          <Privateoute path="/Afterlogin">
            <Afterlogin />
          </Privateoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route  path="/Home">
            <Home />
          </Route>
          
          <Route  path="/GetStudent">
            <StudentData />
          </Route>
          <Route  path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
      </Context.Provider>
  );
}

export default App;
