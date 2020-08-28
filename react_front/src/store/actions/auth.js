
export const LOGIN = 'Auth/login'
export const LOGOUT = "Auth/logout"

export const login = (username='admin', password='admin') => {
  fetch(`${APP_BACK_ENDPOINT}/api-token-auth/`, {
    method: 'POST',
    body: JSON.stringify({username, password})
  }).then(response => {
    return {type: LOGIN, payload: response}
  })
}

export const logout = () => {
  return { type: LOGOUT }
};

