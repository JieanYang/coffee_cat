
import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../../store/actions";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const Form = (props) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addArticle({ title })
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.show_input.includes('title') &&  
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>}
      <button type="submit">SAVE</button>
    </form>
  )
}

const connectForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default connectForm;