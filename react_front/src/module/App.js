// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from "./2_component/Header";
import Article from "./1_page/Article";
import Login from "./1_page/Login";

const App = () => (
  <>
    <Router>
      <Header />
      <div id="page_content" style={{paddingTop: "170px"}}>
        <Switch>
          <Route path="/about"><h2>About</h2></Route>
          <Route path="/contact"><h2>Contact</h2></Route>
          <Route path="/article"><Article /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/"><h2>Home</h2></Route>
        </Switch>
      </div>
    </Router>
  </>
);



export default App;