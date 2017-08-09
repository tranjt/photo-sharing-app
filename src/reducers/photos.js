import { SET_PHOTOS } from "../actions/actions"; 

export default function photos(state = [], action = {}) {
    switch (action.type) {
        case SET_PHOTOS:
            return [                    
                    ...action.photos
                ];           
        default:
            return state;
    }
}