export const SEND_EMAIL = 'SEND_EMAIL'

export const sendEmail = () => {
    return dispatch => {
        return fetch("http://localhost:8000/Email/send_email")
        .then(response => {
            const data = response
            dispatch({type: SEND_EMAIL, payload: data})
        })
    }
}