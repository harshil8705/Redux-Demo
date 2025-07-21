import { createStoreHook } from "react-redux"
import countReducer from "./reducers/countReducer"

const store = createStoreHook(countReducer);

export default store;