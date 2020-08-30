
import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import Form from "../3_unit/Form"
import Cover from "../2_component/Cover"

const Note = (props) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch(APP_BACK_ENDPOINT + '/Note/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setNotes(data)
    });
  }, [notes.length])

  return (
    <div>
      <div>
        <Cover title="Note" />
      </div>
      <div className="Notes">
        <div>
          <ul>
            {notes.map((el) => (
              <li key={el.id}>
                {el.title}: {el.content} [{el.id}]
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Create Note</h2>
          <Form type="Note" action="POST" show_input={['title', 'body']} />
        </div>
        <div>
          <h2>Update Note</h2>
          <Form type="Note" action="PUT" show_input={['id', 'title', 'body']} />
        </div>
        <div>
          <h2>Delete Note</h2>
          <Form type="Note" action="DELETE" show_input={['id']} />
        </div>
      </div>
    </div>
  )
}

export default connect(null, null)(Note)