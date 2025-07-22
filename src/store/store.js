import countReducer from "./reducers/countReducer"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        count: countReducer,
    },
    devTools: true,
});

export default store;