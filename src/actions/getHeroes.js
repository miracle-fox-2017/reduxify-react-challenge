import axios from 'axios'
const heroApi = `http://api.herostats.io/heroes/all`

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


export const fetchApiHeroes = () => {
	return (dispatch, getState) => {
		axios.get(heroApi)
		.then(response => {
			let tempHero = []
			for (let hero in response.data){
				tempHero.push(response.data[hero])
			}
			dispatch(getHeroes(tempHero))
		})
		.catch(err => {
			console.log(err)
		})		
	}
}

export const deleteHero = (oneHero, allHero) => {
	return (dispatch,getState) => {	
		let heroes = allHero.filter(hero => hero.Name !== oneHero.Name)		
		dispatch(getHeroes(heroes))
	}
}