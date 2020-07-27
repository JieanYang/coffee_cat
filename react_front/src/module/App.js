// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from "./2_component/Header";
import PrivateRoute from "./2_component/PrivateRoute";
import Article from "./1_page/Article";
import Login from "./1_page/Login";

const App = () => (
  <>
    <Router>
      <Header />
      <div id="page_content" style={{paddingTop: "170px"}}>
        <Switch>
          <Route exact path="/login/" component={Login} />
          <PrivateRoute path="/about/" component={() => <h2>About</h2>} />
          <PrivateRoute path="/contact/" component={() => <h2>contact</h2>} />
          <PrivateRoute path="/article/" component={Article} />
          <PrivateRoute path="/" component={() => <h2>Home</h2>} />
        </Switch>
      </div>
    </Router>
  </>
);



export default App;