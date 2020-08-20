// src/App.js

import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import './style/4_base/App.scss'

import PrivateRoute from "./html/4_base/PrivateRoute"
import Header from "./html/2_component/Header"
import Footer from "./html/2_component/Footer"
import Article from "./html/1_page/Article"
import Contact from "./html/1_page/Contact"
import Login from "./html/1_page/Login"
import Home from "./html/1_page/Home"
import Note from "./html/1_page/Note"

const App = () => (
  <>
    <Router>
      <Header />
      <div id="page_content" style={{paddingTop: "170px"}}>
        <Switch>
          <Route exact path="/login/" component={Login} />
          <PrivateRoute path="/about/" component={() => <h2>About</h2>} />
          <PrivateRoute path="/contact/" component={Contact} />
          <PrivateRoute path="/article/" component={Article} />
          <PrivateRoute path="/note" component={Note} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  </>
)



export default App