
import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle, sendEmail } from "../../../store/actions";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    sendEmail: (data) => dispatch(sendEmail(data))
  };
}

const Form = (props) => {
  // Article [title]
  // Email [recipient, subject, body]
  // Note [id, title, body]
  const [title, setTitle] = useState("")
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [id, setId] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (props.type=='Article') {
      props.addArticle({ title })
      setTitle("")
    } else if (props.type=='Contact') {
      props.sendEmail({recipient, subject, body})
    } else if (props.type=='Note') {
      console.log("type note")
      if (props.action=="POST") {
        fetch(APP_BACK_ENDPOINT + '/Note/', {
          method: 'POST',
          body: JSON.stringify({title, content: body})
        })
      } else if (props.action=="PUT") {
        console.log("update note")
        fetch(`${APP_BACK_ENDPOINT}/Note/${id}/`, {
          method: 'PUT',
          body: JSON.stringify({title, content: body})
        })
      } else if (props.action=="DELETE") {
        console.log("delete note")
        fetch(`${APP_BACK_ENDPOINT}/Note/${id}/`, {
          method: 'DELETE'
        })
      }
    }
    else console.error('bad input for handleSubmit in Form file')
  }

  const includes_array = (data, array) => {
    array.forEach(item => {
      data.includes(item);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.show_input.includes('id') && 
        <>
          <div>
            <label htmlFor="id">id</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="id"
              value={id}
              onChange={event => setId(event.target.value)}
            />
          </div>
        </>}
      {props.show_input.includes('title') &&  
        <>
          {props.show_input.includes('id') && <br />}
          <div>
            <label htmlFor="title">Title</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
        </>}
      {props.show_input.includes('Email_recipient') && 
        <>
          {includes_array(props.show_input, ['id', 'title']) && <br />}
          <div>
            <label htmlFor="recipient">Recipient</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={event => setRecipient(event.target.value)}
            />
          </div>
        </>
      }
      {props.show_input.includes('Email_subject') &&  
        <>
          <br />
          <div>
            <label htmlFor="subject">Subject</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={event => setSubject(event.target.value)}
            />
          </div>
        </>
      }
      {props.show_input.includes('body') &&  
        <>
          <br />
          <div>
            <label htmlFor="body">Body</label>  
            &nbsp;&nbsp;
            <textarea
              id="body"
              value={body}
              onChange={event => setBody(event.target.value)}
              rows={10}
              cols={100}
            />
          </div>
        </>
      }
      <button type="submit">{
        props.show_input.includes('Email_recipient') ? 'Send email' : 'SAVE'
      }</button>
    </form>
  )
}

const connectForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default connectForm;