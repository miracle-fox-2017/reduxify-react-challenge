export const getHeroes = (payload) => {
	return {
		type: "GET_HEROES",
      	payload: payload
	}
}