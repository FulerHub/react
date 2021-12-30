import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
    appReducer: appReducer,

})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) //


