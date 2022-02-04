export const wordReducer = (state = [], action) => {
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
