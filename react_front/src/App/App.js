// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import PrivateRoute from "./html/4_base/PrivateRoute";
import Header from "./html/2_component/Header";
import Article from "./html/1_page/Article";
import Login from "./html/1_page/Login";
import Home from "./html/1_page/Home";

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
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </>
);



export default App;