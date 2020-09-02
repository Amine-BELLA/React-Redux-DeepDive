import { FIRST_ACTION, SECOND_ACTION, THIRD_ACTION } from '../action/types';

const initialState = {
    connected: false,
    user_text: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_ACTION: {
            return (
                {
                    ...state,
                    connected: true
                }
            );
        }

        case SECOND_ACTION:
            return {
                ...state,
                connected: false
            }

        case THIRD_ACTION:
            return {
                ...state,
                user_text: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;