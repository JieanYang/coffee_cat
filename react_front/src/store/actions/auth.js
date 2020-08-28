
export const AUTH_ERRORS = "Auth/errors"
export const LOGIN = 'Auth/login'
export const LOGOUT = "Auth/logout"

export const login = (username='admin', password='admin') => dispach => {
  fetch(`${APP_BACK_ENDPOINT}/api-token-auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, password})
  })
  .then(response =>  response.json().then(data => ({status: response.status, data: data})))
  .then(({status, data}) => {
    if(status == 200) dispach({type: LOGIN, payload: data})
    else dispach({type: AUTH_ERRORS, payload: data})
  })
  .catch(error => {
    dispach({type: AUTH_ERRORS, payload: error})
  })
}

export const logout = () => {
  return { type: LOGOUT }
};



// ==================================================

export const isAuthenticated = (state) => {	
  if (state.auth.token) return true
}
