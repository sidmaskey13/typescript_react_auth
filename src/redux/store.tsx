import { createStore, applyMiddleware } from "redux";
import indexReducer from "./indexReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    indexReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>