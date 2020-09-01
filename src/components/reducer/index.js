import { FIRST_ACTION, SECOND_ACTION } from '../action/types';

const initialState = {
    connected: false
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
                connected: false
            }

        default:
            return state;
    }
}

export default rootReducer;