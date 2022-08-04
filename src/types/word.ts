export interface Word {
  Word: string;
  Definition: string[];
  Part_of_speech: string;
}

export interface WordState {
  words: Word[];
  loading: boolean;
  error: null | string;
}

export enum fetchWordsTypes {
  FETCH_WORDS = 'FETCH_WORDS',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR',
}

interface fetchWordAction {
  type: fetchWordsTypes.FETCH_WORDS;
}
interface fetchWordSuccessAction {
  type: fetchWordsTypes.FETCH_WORDS_SUCCESS;
  payload: any[];
}
interface fetchWordErrorAction {
  type: fetchWordsTypes.FETCH_WORDS_ERROR;
  payload: string;
}

export type wordAction = fetchWordAction | fetchWordErrorAction | fetchWordSuccessAction;
