import { LANGUAGE_TYPE } from "../types"

const initialState = {
    lang: false
}

export const langReducer = (state = initialState , action) => {
    switch (action.type) {
        case LANGUAGE_TYPE:
            return {
                ...state,
                lang: !state.lang
            }
        default:
            return state;
    }
}