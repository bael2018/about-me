import { appAcionTypes } from "../action-creators/app-actions";

const initialState = {
    isLocal: false,
    activeLink: 1,
    isModal: false,
    aboutWork: {},
    isBurger: false
}

export const appReducer = (state = initialState , action) => {
    switch (action.type) {
        case appAcionTypes.LOCAL_TYPE:
            return {
                ...state,
                isLocal: !state.isLocal
            }
        case appAcionTypes.ACTIVE_LINK:
            return {
                ...state,
                activeLink: action.payload
            }
        case appAcionTypes.ACTIVE_MODAL:
            return {
                ...state,
                isModal: !state.isModal
            }
        case appAcionTypes.SET_INFO:
            return {
                ...state,
                aboutWork: action.payload
            }
        case appAcionTypes.BURGER_ACTIVE:
            return {
                ...state,
                isBurger: !state.isBurger
            }
        default:
            return state;
    }
}