const initialState = { backgroundColor: 'white', color: 'black' };

export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_MODE': {
      return { backgroundColor: 'grey', color: 'white' };
    }
    case 'SET_LIGHT_MODE': {
      return { backgroundColor: 'white', color: 'black' };
    }
    default: {
      return { ...state };
    }
  }
};
