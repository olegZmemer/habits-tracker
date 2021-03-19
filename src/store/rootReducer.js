// Combine all app reducers to one and export it
import { combineReducers } from "redux";
import habits from './habits/reducers'
import dayModal from './dayModal/reducers'
import habitModal from './habitModal/reducers'
const rootReducer = combineReducers({
    habits,
    dayModal,
    habitModal
})
export default rootReducer