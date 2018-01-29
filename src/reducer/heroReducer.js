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

export default heroReducer