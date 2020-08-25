import React from "react"
import { connect } from "react-redux";
import Form from "../3_unit/Form"

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <Form show_input={['Email_recipient', 'Email_subject', 'Email_body']} />
        </div>
    )
}

const connectContact = connect(
    null, 
    null
)(Contact)

export default connectContact