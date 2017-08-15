import { SET_USERS, SET_USER } from "../actions/actions";

const INITIAL_STATE = { all: [], user: null, authenticated: false }

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
        default:
            return state;
    }
}