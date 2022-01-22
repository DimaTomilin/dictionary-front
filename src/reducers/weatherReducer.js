const initialState = [
  {
    Word: 'Maximum',
    Part_of_speech: 'Adjective',
    Definition: [
      'Greatest in quantity or highest in degree attainable or attained; as, a maximum consumption of fuel; maximum pressure; maximum heat.',
    ],
  },
];

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEW_WORD': {
      const newWord = action.payload;
      return [...newWord];
    }
    default: {
      return [...state];
    }
  }
};
