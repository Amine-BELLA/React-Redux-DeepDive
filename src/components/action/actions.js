import { FIRST_ACTION, SECOND_ACTION, THIRD_ACTION } from "./types";


function SUCCESS() {
    return {
        type: FIRST_ACTION
    }
}

function FAILURE() {
    return {
        type: SECOND_ACTION
    }
}

function USER_TEXT(text) {
    return {
        type: THIRD_ACTION,
        payload: text
    }
}

export { SUCCESS, FAILURE, USER_TEXT };

