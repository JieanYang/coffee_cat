// import { isRSAA, apiMiddleware as default_apiMiddleware } from 'redux-api-middleware';
// import { TOKEN_RECEIVED, refreshAccessToken } from '../actions'
// import { refreshToken, isAccessTokenExpired } from '../reducers'

// const createApiMiddleware = () => {
//   let postponedRSAAs = []

//   return ({ dispatch, getState }) => {
//     const rsaaMiddleware = default_apiMiddleware({dispatch, getState});

//     return (next) => (action) => {
//       const nextCheckPostoned = (nextAction) => {
//         // Run postponed actions after token refresh
//         if (nextAction.type === TOKEN_RECEIVED) {
//           next(nextAction);
//           postponedRSAAs.forEach((postponed) => {
//             rsaaMiddleware(next)(postponed);
//           })
//           postponedRSAAs = [];
//         } else {
//           next(nextAction);
//         }
//       }
//       if(isRSAA(action)) {
//         const state = getState(), token = refreshToken(state);

//         if(token && isAccessTokenExpired(state)) {
//           postponedRSAAs.push(action);
//           if(postponedRSAAs.length === 1) {
//             const action = refreshAccessToken(token);
//             return rsaaMiddleware(nextCheckPostoned)(action);
//           } else {
//             return
//           }
//         }
//         return rsaaMiddleware(next)(action);
//       }
//       return next(action);
//     }
//   }
// }

// export const apiMiddleware = createApiMiddleware();