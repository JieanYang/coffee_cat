import React from "react"
import { connect } from "react-redux";
import Form from "../3_unit/Form"
import Cover from "../2_component/Cover"

const Contact = () => {
  return (
    <div>
      <div>
        <Cover title="Contact" />
      </div>
      <div style={{padding: "30px 0"}}>
        <Form type="Contact" show_input={['Email_recipient', 'Email_subject', 'body']} />
      </div>
    </div>
  )
}

const connectContact = connect(
    null, 
    null
)(Contact)

export default connectContact