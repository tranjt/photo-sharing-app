import { SET_USERS, SET_USER, AUTH_USER, UNAUTH_USER, FAILED_LOGGIN } from "../actions/actions";

const INITIAL_STATE = { all: [], user: null, authUser:null, authenticated: false, errorMessage: null }

export default function users(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                all: action.users
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case AUTH_USER:
         return {
             ...state,
              authenticated: true,
              authUser: action.user,
              errorMessage: null
         };
         case UNAUTH_USER:
         return {
             ...state,
              authenticated: false,
              authUser: null,
              errorMessage: null
         };
         case FAILED_LOGGIN: 
         return {
             ...state,
             errorMessage: action.error
         }
        default:
            return state;
    }
}