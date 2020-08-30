import { withAuth } from '../reducers'

export const SEND_EMAIL = 'SEND_EMAIL'


export const sendEmail = ({recipient, subject, body}) => (dispatch, getState) => {
    fetch(APP_BACK_ENDPOINT + '/Email/send_email', {
        method: 'POST', 
        headers: withAuth(getState())(),
        body: JSON.stringify({recipient, subject, body})
    })
    .then(resposne => resposne.json().then(data => ({status: resposne.status, data})))
    .then(({status, data}) => {
        console.log('status', status)
        console.log('data', data)
        dispatch({type: "Suceess send email"})
    })
}