
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
  // Article
  const [title, setTitle] = useState("")
  // Email
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if(props.show_input.includes('title')) {
      props.addArticle({ title })
      setTitle("")
    } else if(props.show_input.includes('Email_recipient')) {
      props.sendEmail({recipient, subject, body})
    } else console.log('bad input for handleSubmit in Form file')
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
      {props.show_input.includes('Email_recipient') && 
        <>
          <br />
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
      {props.show_input.includes('Email_body') &&  
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