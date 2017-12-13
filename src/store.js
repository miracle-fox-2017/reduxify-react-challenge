import { combineReducers, createStore } from 'redux'


const initialState = {
	heroes: [],
	subscribed: false
}

const heroReducer = (state=initialState,action) => {
	switch(action.type){
		case "GET_HEROES": 
			return state = {...state, heroes: action.payload}
		default:
		return state
	}	
}


const reducers = combineReducers({
	heroReducer
})

const store = createStore(reducers)

export default store