import { users } from "../api/tempUserData";

export const SET_USERS = "SET_USERS";

function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function getUsers() {
    return (dispatch) => {
        dispatch(setUsers(users));
    }
}