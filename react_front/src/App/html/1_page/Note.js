
import React, { useState, useEffect } from "react";
import { connect } from "react-redux"

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
            <h1>Note page</h1>
            <ul>
                {notes.map((el) => (
                    <li key={el.id}>
                        {el.title}: {el.content}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default connect(null, null)(Note)