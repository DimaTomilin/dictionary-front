import { fetchWordsTypes, wordAction, WordState } from '../../types/word';
import { updateLocalStorage } from 'helpers/localStorageFunctions';

const defaultState: WordState = {
  words: [],
  loading: false,
  error: null,
};

export const wordReducer = (state = defaultState, action: wordAction): WordState => {
  switch (action.type) {
    case fetchWordsTypes.FETCH_WORDS:
      return { ...state, loading: true, error: null };
    case fetchWordsTypes.FETCH_WORDS_SUCCESS:
      updateLocalStorage(action.payload[0].Word);
      return { ...state, loading: false, words: action.payload };
    case fetchWordsTypes.FETCH_WORDS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
