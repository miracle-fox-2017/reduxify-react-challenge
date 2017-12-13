export const getHeroes = (payload) => {
	return {
		type: "GET_HEROES",
      	payload: payload
	}
}

export const getMoveSpeedLess = (payload) => {
	let less = []
		payload.forEach(hero => {
			if(hero.Movespeed < 300){
				less.push(hero)
			}
		})	
	return {
		type: "GET_LESS_SPEED",
      	payload: less
	}
}


export const getMoveSpeedMore = (payload) => {
	let more = []
		payload.forEach(hero => {
			if(hero.Movespeed >= 300){
				more.push(hero)
			}
		})
	return {
		type: "GET_MORE_SPEED",
      	payload: more
	}
}