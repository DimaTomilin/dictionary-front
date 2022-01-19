export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_CITY':
      return [...state];
    case 'SET_WEATHER':
      const newCity = action.payload;
      const copyState = state.slice();
      copyState.push(newCity);
      return [...copyState];
    case 'DELETE_WEATHER':
      const weatherId = action.payload;
      const afterDeleteState = state.filter((cityWeather) => {
        return cityWeather.id !== weatherId;
      });
      return [...afterDeleteState];
    case 'UPDATE_WEATHER':
      const { id, weather, wind, main, name } = action.payload;
      const afterUpdate = state.slice();
      let newWeather = afterUpdate.find((city) => {
        return city.id === id;
      });
      newWeather = { id, weather, wind, main, name };
      return [...afterUpdate];
    case 'START_UPDATE_WEATHER':
      return [...state];
    default:
      return [...state];
  }
};
