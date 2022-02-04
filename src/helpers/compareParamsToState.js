import axios from 'axios';
import { alert } from './alerts';

const baseUrl = 'https://whispering-woodland-98306.herokuapp.com/';

export const checkRouteParamsAndGetWord = async (
  wordInState,
  dispatch,
  { word, partOfSpeech },
  path,
  queryParams
) => {
  if (path.includes('part-of-speech')) {
    if (
      wordInState.length === 0 ||
      wordInState[0].Part_of_speech.toLowerCase() != partOfSpeech.toLowerCase()
    ) {
      getRandomWord(queryParams, partOfSpeech, dispatch);
      return;
    } else {
      return;
    }
  } else {
    if (wordInState.length === 0 || wordInState[0].Word != word.toLowerCase()) {
      getNewWord(word, partOfSpeech, dispatch);
      return;
    } else {
      return;
    }
  }
};

const getNewWord = async (word, partOfSpeech, dispatch) => {
  let url = baseUrl + word;
  if (partOfSpeech) {
    url = url + '/' + partOfSpeech;
  }
  try {
    const { data } = await axios.get(url);
    if (data.length === 0) {
      alert('Sorry but we don`t find this word');
      return;
    }
    await dispatch({
      type: 'SET_NEW_WORD',
      payload: data,
    });
  } catch (error) {
    console.log(error);
    alert(error.response.message);
  }
};

const getRandomWord = async (queryParams, partOfSpeech, dispatch) => {
  let url = baseUrl + 'part-of-speech/' + partOfSpeech;
  if (queryParams) {
    if (queryParams.trim().length === 1) {
      url += `?letter=${queryParams.trim().toLowerCase()}`;
    } else {
      alert('You need insert only first letter of word');
      return;
    }
  }
  try {
    const { data } = await axios.get(url);
    if (data.length === 0) {
      alert('Sorry but we don`t find the word,please try again');
      return;
    }
    dispatch({
      type: 'SET_NEW_WORD',
      payload: [data],
    });
  } catch (error) {
    alert(error.response.message);
  }
};
