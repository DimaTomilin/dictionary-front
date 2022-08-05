import { firstLetterUpperCase } from './firstLetterUpperCase';

const checkStorageAndCreate = () => {
  if (localStorage.getItem('words') === null) {
    localStorage.setItem('words', JSON.stringify([]));
  }
};

const getCurrentDateAndTimeString = () => {
  const today = new Date();
  const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const dateTime = time + ' ' + date;

  return dateTime;
};

export const updateLocalStorage = (word: string) => {
  checkStorageAndCreate();
  const wordsHistory = JSON.parse(localStorage.getItem('words') as string);
  const newStorageLength = wordsHistory.unshift({
    word: firstLetterUpperCase(word),
    date: getCurrentDateAndTimeString(),
  });
  if (newStorageLength > 10) {
    wordsHistory.pop();
  }
  localStorage.setItem('words', JSON.stringify(wordsHistory));
};
