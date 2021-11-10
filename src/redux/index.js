import { combineReducers, createStore } from "redux";
import { langReducer } from "./reducers/langReducer";

const rootReducer = combineReducers({
    langReducer
})

export const store = createStore(rootReducer)