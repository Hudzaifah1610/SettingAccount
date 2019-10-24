import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chatting from "../container/Chatting/";
import Login from "../container/Login/Login";
import LandingPage from "../components/LandingPage/LandingPage";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/chat" component={Chatting} />
    </Router>
  );
}
export default Routes;
