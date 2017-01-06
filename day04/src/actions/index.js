import axios from "axios";

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../constants/index";

export function fetchUser(name) {
    const request = axios.get("https://api.github.com/users/" + name);

    return {
        type: FETCH_USER,
        payload: request
    }
}

export function fetchUserSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export function fetchUserError() {
    return {
        type: FETCH_USER_ERROR,
        payload: ""
    }
}