import { Word } from 'types/word';

export const firstLetterUpperCase = (word: Word): string | undefined => {
  let wordToHeader = '';
  if (word) {
    wordToHeader = word.Word.charAt(0).toUpperCase() + word.Word.slice(1);
  }
  return wordToHeader;
};
