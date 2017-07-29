import { SET_PHOTOS } from "../actions/actions";

const INITIAL_STATE = { all: [], preFetch: false }

export default function photos(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                all: [
                    ...state.all,
                    ...action.photos
                ],
                preFetch: true
            };
        default:
            return state;
    }
}