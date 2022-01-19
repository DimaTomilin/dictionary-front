const initialState = [
  {
    word: 'Maximum',
    partOfSpeech: 'Noun',
    definition:
      'The greatest quantity or value attainable in a given case; or, the greatest value attained by a quantity which first increases and then begins to decrease; the highest point or degree; -- opposed to minimum.',
  },
  // {
  //   word: 'Maximum',
  //   partOfSpeech: 'Adjective',
  //   definition:
  //     'Greatest in quantity or highest in degree attainable or attained; as, a maximum consumption of fuel; maximum pressure; maximum heat.',
  // },
];

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEW_WORD': {
      const newWord = action.payload;
      return [newWord];
    }
    case 'DELETE_WEATHER': {
      const weatherId = action.payload;
      const afterDeleteState = state.filter((cityWeather) => {
        return cityWeather.id !== weatherId;
      });
      return [...afterDeleteState];
    }
    default: {
      return [...state];
    }
  }
};
