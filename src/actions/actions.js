import axios from "axios";

export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const SET_PHOTOS = "SET_PHOTOS";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

function setPhotos(photos) {
    return {
        type: SET_PHOTOS,
        photos
    }
}

function authUser(user) {
    return {
        type: AUTH_USER,
        user
    }
}

export function unauthUser() {
    // delete token
    return {
        type: UNAUTH_USER        
    }
}

// Temp local fetch
// export function getUsers() {
//     return (dispatch) => {
//         dispatch(setUsers(users));
//     }
// }


export function getUsers() {
    return dispatch => {
        axios.get("/user/list")
            .then(users => {
                dispatch(setUsers(users.data));
            }).catch(err => console.log(err));
    }
}


export function getUser(id) {
    return dispatch => {
        axios.get(`/user/${id}`)
            .then(user => {
                dispatch(setUser(user.data));
            }).catch(err => console.log(err));
    }
}

// // Temp local fetch
// export function getPhotos() {
//     return dispatch => {
//         dispatch(setPhotos(photos));
//     }
// }

// Temp local fetch
export function getPhotos(id) {
    return dispatch => {
        axios.get(`/photosOfUser/${id}`)
            .then(photos => {
                dispatch(setPhotos(photos.data));
            }).catch(err => console.log(err));
    }
}


export function signinUser(user) {
    return dispatch => {
        axios.post("/signin", user)
            .then(response => {
                console.log(response.data.user);
                dispatch(authUser(response.data.user));
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }
}


