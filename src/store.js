import { combineReducers, createStore } from 'redux'

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
	heroes: [],
	subscribed: false
}

const heroReducer = (state=initialState,action) => {
	switch(action.type){
		case "GET_HEROES": 
			return state = {...state, heroes: action.payload}
		case "GET_LESS_SPEED":
			return state = {...state, heroes: action.payload}
		case "GET_MORE_SPEED":
			return state = {...state, heroes: action.payload}			
		default:
		return state
	}	
}


const reducers = combineReducers({
	heroReducer
})

const store = createStore(reducers,reduxDev)

export default store