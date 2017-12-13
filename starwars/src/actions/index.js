export const allHeroes = (heroes) => {
  return {
    type: 'GET_ALL_HEROES',
    payload: heroes
  } 
}

export const allPlanets = (planets) => {
  console.log('======DI ACTIONS===========================');
  console.log(planets);
  console.log('====================================');
  return {
    type: 'GET_ALL_PLANETS',
    payload: planets
  }
}