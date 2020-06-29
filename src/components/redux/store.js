import { createStore, compose } from "redux";
import { dabbaApp } from "./reducers";

const store = createStore(
    dabbaApp,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
