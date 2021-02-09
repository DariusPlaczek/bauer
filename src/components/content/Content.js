import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Content.css";

import Leftsidebar from "./Leftsidebar/Leftsidebar";
import Middlecontent from "./Middlecontent/Middlecontent";
import Rightsidebar from "./Rightsidebar/Rightsidebar";

function Content() {
  return (
    <div className="main-container">
      <Leftsidebar />
      <Router>
        <Switch>
          <Route path="/">
            <Middlecontent />
          </Route>
        </Switch>
      </Router>
      <Rightsidebar />
    </div>
  );
}

export default Content;
