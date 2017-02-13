//the master reducer doesn't manage any state on it's own, it manages all the reducers.
//the reducers manage state. Export all reducers as an object using 'combineReducers'
//and each propert we export, will be available as state.*PROPERTY*


//first we need combineReducers from Redux
import { combineReducers } from 'redux'; 
import StudentReducer from './StudentReducer';


const rootReducer = combineReducers({
	students: StudentReducer
})

export default rootReducer; 