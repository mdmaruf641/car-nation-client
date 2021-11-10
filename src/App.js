import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
