import { combineReducers } from "redux"
import counter from "./counter"
import counter2 from "./counter2"

let reducers = combineReducers({
    counter,
    counter2,
})

export default reducers