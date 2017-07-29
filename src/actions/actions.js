import { users, photos } from "../api/tempUserData";

export const SET_USERS = "SET_USERS";
export const SET_PHOTOS = "SET_PHOTOS";

function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

function setPhotos(photos) {
    return {
        type: SET_PHOTOS,
        photos
    }
}

// Temp local fetch
export function getUsers() {
    return (dispatch) => {
        dispatch(setUsers(users));
    }
}

// Temp local fetch
export function getPhotos() {
    return (dispatch) => {
        dispatch(setPhotos(photos));
    }
}
