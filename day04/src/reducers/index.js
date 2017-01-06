import { combineReducers } from "redux";

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../constants/index";

export default combineReducers({
    user: user
});


function user(state={data: [], loading: false, error: false}, action) {
    switch(action.type) {
        case FETCH_USER:
            return {
                data: state.data,
                loading: true,
                error: false
            }
        
        case FETCH_USER_SUCCESS:
            return {
                data: [...state.data, action.payload],
                loading: false,
                error: false
            }

        case FETCH_USER_ERROR:
            return {
                data: state.data,
                loading: false,
                error: true
            }
    }

    return state;
}