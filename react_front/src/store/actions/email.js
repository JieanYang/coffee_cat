export const SEND_EMAIL = 'SEND_EMAIL'
import { withAuth } from '../reducers'
import { RSAA } from 'redux-api-middleware';


export const SEND_EMAIL_REQUEST = '@@Email/SEND_EMAIL_REQUEST'
export const SEND_EMAIL_SUCCESS = '@@Email/SEND_EMAIL_SUCCESS'
export const SEND_EMAIL_FAILURE = '@@Email/SEND_EMAIL_FAILURE'

export const sendEmail = (data) => ({
    [RSAA]: {
        endpoint: APP_BACK_ENDPOINT + '/Email/send_email',
        method: 'POST',
        body: JSON.stringify(data),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE
        ]
    }
})