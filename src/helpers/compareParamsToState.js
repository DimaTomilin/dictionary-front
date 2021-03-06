import axios from 'axios';
import { alert } from './alerts';

const baseUrl = 'https://whispering-woodland-98306.herokuapp.com/';

export const checkRouteParamsAndGetWord = async (
  dispatch,
  { word, partOfSpeech },
  path,
  queryParams
) => {
  if (path.includes('part-of-speech')) {
    getRandomWord(queryParams, partOfSpeech, dispatch);
    return;
  } else {
    getNewWord(word, partOfSpeech, dispatch);
    return;
  }
};

const getNewWord = async (word, partOfSpeech, dispatch) => {
  let url = baseUrl + word;
  if (partOfSpeech) {
    url = url + '/' + partOfSpeech.toLowerCase();
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
  let url = baseUrl + 'part-of-speech/' + partOfSpeech.toLowerCase();
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
