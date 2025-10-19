/* eslint-disable */
interface UrlParams {
  word?: string;
  partOfSpeech: string;
}
/**
 * createFetchURL
 *
 * Function that get all router params and use it to create correct fetch url to take data from server
 * @param params Object of url params of route
 * @param path Path string of route
 * @param queryParams Query params of route
 * @returns Correct fetch URL string
 */
export const createFetchURL = (params: UrlParams, path: string, queryParams: string): string => {
  let url = 'https://dictionary-back.onrender.com/';
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
