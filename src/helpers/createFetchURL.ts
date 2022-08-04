import { UrlParams } from '../types';

export const createFetchURL = (params: UrlParams, path: string, queryParams: string): string => {
  // let url = 'https://whispering-woodland-98306.herokuapp.com/';
  let url = 'http://localhost:3000/';
  if (path.includes('part-of-speech')) {
    url = url + 'part-of-speech/' + params.partOfSpeech.toLowerCase();
    if (queryParams) {
      url += `?letter=${queryParams.trim().toLowerCase()[0]}`;
    }
  } else {
    url = url + params.word;
    if (params.partOfSpeech) {
      url = url + '/' + params.partOfSpeech.toLowerCase();
    }
  }
  return url;
};
