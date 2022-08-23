import { firstLetterUpperCase } from './firstLetterUpperCase';

/**
 * checkStorageAndCreate
 *
 * Check if use already have key words in LocalStorage and create it if don`t
 */
const checkStorageAndCreate = () => {
  if (localStorage.getItem('words') === null) {
    localStorage.setItem('words', JSON.stringify([]));
  }
};

/**
 * getCurrentDateAndTimeString
 *
 * Using Date object to get current time and date
 * @returns String in correct format of time and date
 */
const getCurrentDateAndTimeString = () => {
  const today = new Date();

  const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const dateTime = time + ' ' + date;

  return dateTime;
};

/**
 * updateLocalStorage
 *
 * Check if storage already exist. Get all history of searched words and adding new history element.
 * Deleting oldest history element if I have more that 20 elements. Update Storage
 * @param word Last word that I searched in string
 */
export const updateLocalStorage = (word: string) => {
  checkStorageAndCreate();
  const wordsHistory = JSON.parse(localStorage.getItem('words') as string);
  const newStorageLength = wordsHistory.unshift({
    word: firstLetterUpperCase(word),
    date: getCurrentDateAndTimeString(),
  });
  if (newStorageLength > 20) {
    wordsHistory.pop();
  }
  localStorage.setItem('words', JSON.stringify(wordsHistory));
};
