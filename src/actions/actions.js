import { users, photos } from "../api/tempUserData";
import axios from "axios";

export const SET_USERS = "SET_USERS";
export const SET_PHOTOS = "SET_PHOTOS";

export function setUsers(users) {
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


// Temp local fetch
export function getPhotos() {
    return (dispatch) => {
        dispatch(setPhotos(photos));
    }
}


