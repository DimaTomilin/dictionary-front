export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_CITY': {
      return [...state];
    }
    case 'SET_WEATHER': {
      const newCity = action.payload;
      const copyState = state.slice();
      copyState.push(newCity);
      return [...copyState];
    }
    case 'DELETE_WEATHER': {
      const weatherId = action.payload;
      const afterDeleteState = state.filter((cityWeather) => {
        return cityWeather.id !== weatherId;
      });
      return [...afterDeleteState];
    }
    case 'START_UPDATE_WEATHER': {
      return [...state];
    }
    default: {
      return [...state];
    }
  }
};
