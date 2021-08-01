import {applyMiddleware, compose, createStore} from "redux";
import combinedReducer from "./reducers";
import thunk from "redux-thunk";

const store = () => {
    createStore(
        combinedReducer,
        window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
        applyMiddleware(thunk)
    )
}
export default store