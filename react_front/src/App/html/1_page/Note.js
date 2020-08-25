
import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import Form from "../3_unit/Form"

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
        <>
            <div>
                <h1>Note page</h1>
                <ul>
                    {notes.map((el) => (
                        <li key={el.id}>
                            {el.title}: {el.content}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Create Note</h1>
                <Form type="Note" show_input={['title', 'body']} />
            </div>
        </>
    )
}

export default connect(null, null)(Note)