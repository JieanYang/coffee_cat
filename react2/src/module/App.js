// src/js/components/App.js
import React from "react";
import List from "./3_unit/List";
import Form from "./3_unit/Form";
import Post from "./3_unit/Posts";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;