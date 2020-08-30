
import { withAuth } from '../reducers'

export const GET_NOTES = "GET_NOTES"
export const GET_ONE_NOTE = "GET_ONE_NOTE"
export const CREATE_NOTES = "CREATE_NOTES"
export const UPDATE_NOTES = "UPDATE_NOTES"
export const DELETE_NOTES = "DELETE_NOTES"


export const create_note = ({title, content}) => (dispatch, getState) => {    
    fetch(APP_BACK_ENDPOINT + '/Note/', {
        method: 'POST',
        headers: withAuth(getState())(),
        body: JSON.stringify({title, content})
    })
    .then(resposne => resposne.json().then(data => ({status: resposne.status, data})))
    .then(({status, data}) => {
        console.log('status', status)
        console.log('data', data)
        dispatch({type: "Suceess create note"})
    })
}

export const update_note = (id, {title, content}) => (dispatch, getState) => {
    fetch(`${APP_BACK_ENDPOINT}/Note/${id}/`, {
        method: 'PUT',
        headers: withAuth(getState())(),
        body: JSON.stringify({title, content})
    })
    .then(resposne => resposne.json().then(data => ({status: resposne.status, data})))
    .then(({status, data}) => {
        console.log('status', status)
        console.log('data', data)
        dispatch({type: "Suceess update note"})
    })
}

export const delete_note = id => (dispatch, getState) => {
    fetch(`${APP_BACK_ENDPOINT}/Note/${id}/`, {
        method: 'DELETE',
        headers: withAuth(getState())()
    })
    .then(resposne => ({status: resposne.status}))
    .then(({status}) => {
        console.log('status', status)
        dispatch({type: "Suceess delete note"})
    })
}