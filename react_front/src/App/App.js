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
import About from "./html/1_page/About"

const App = () => (
  <>
    <Router>
      <Header />
      <div id="page_content">
        <Switch>
          <Route exact path="/login/" component={Login} />
          <PrivateRoute path="/about/" component={About} />
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