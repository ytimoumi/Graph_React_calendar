import {combineReducers} from 'redux'
import {Reducer} from "./reducer"
import {CalendarReducer} from "../../Calendar/store/calendarReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Reducer']
};

const rootReducer = combineReducers({
    Reducer,
    CalendarReducer
})

export default  persistReducer(persistConfig , rootReducer)