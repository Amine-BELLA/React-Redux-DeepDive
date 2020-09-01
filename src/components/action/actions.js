import {FIRST_ACTION , SECOND_ACTION} from "./types";

export const SUCCESS = () => {
    return {
        type : FIRST_ACTION
    }
}

export const FAILURE = () => {
    return {
        type : SECOND_ACTION
    }
}