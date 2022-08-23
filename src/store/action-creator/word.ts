/* eslint-disable */
import axios from 'axios';
import { Dispatch } from 'redux';
import { fetchWordsTypes, wordAction } from '../../types/word';

/**
 * fetchWords
 *
 * Action creator that helps use dispatch in more user friendly way. Also uincludes update of loading and error state.
 * @param url Url to fetch server
 */

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
