import { FIRST_ACTION, SECOND_ACTION } from "./types";


export function SUCCESS() {
    return {
        type: FIRST_ACTION
    }
}

export function FAILURE() {
    return {
        type: SECOND_ACTION
    }
}

