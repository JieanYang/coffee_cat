
import { withAuth } from '../reducers'

export const GET_NOTES = "GET_NOTES"
export const GET_ONE_NOTE = "GET_ONE_NOTE"
export const CREATE_NOTES = "CREATE_NOTES"
export const UPDATE_NOTES = "UPDATE_NOTES"
export const DELETE_NOTES = "DELETE_NOTES"


export const create_note = ({title, content}) => dispach => {
    fetch(APP_BACK_ENDPOINT + '/Note/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 660c79f3aa0727ee4adc302f4961f10e3d5d70e6'
        },
        body: JSON.stringify({title, content})
    })
    .then(resposne => resposne.json().then(data => ({status: resposne.status, data})))
    .then(({status, data}) => {
        console.log("Success create note")
        console.log('status', status)
        console.log('data', data)
        dispach({type: "Suceess create note"})
    })
}