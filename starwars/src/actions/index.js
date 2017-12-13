export const allHeroes = (heroes) => {
  return {
    type: 'GET_ALL_HEROES',
    payload: heroes
  } 
}

export const oneHero = (hero) => {
  return {
    type: 'GET_ONE_HERO',
    payload: hero
  }
}