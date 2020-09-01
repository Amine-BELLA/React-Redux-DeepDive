import { FIRST_ACTION, SECOND_ACTION } from "./types";


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

export { SUCCESS, FAILURE };

