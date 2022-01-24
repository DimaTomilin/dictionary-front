const initialState = { backGroundColor: 'white', color: 'black' };

export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_MODE': {
      return { backGroundColor: 'grey', color: 'white' };
    }
    case 'SET_LIGHT_MODE': {
      return { backGroundColor: 'white', color: 'black' };
    }
    default: {
      return [...state];
    }
  }
};
