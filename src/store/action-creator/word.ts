import axios from 'axios';
import { Dispatch } from 'redux';
import { fetchWordsTypes, wordAction } from '../../types/word';

export const fetchWords = (url: string) => {
  return async (dispatch: Dispatch<wordAction>) => {
    try {
      dispatch({ type: fetchWordsTypes.FETCH_WORDS });
      const { data } = await axios.get(url);
      dispatch({ type: fetchWordsTypes.FETCH_WORDS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: fetchWordsTypes.FETCH_WORDS_ERROR, payload: error.response.data.error });
    }
  };
};
