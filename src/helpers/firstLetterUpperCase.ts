/**
 * firstLetterUpperCase
 *
 * Get string and returns this string with first upper case letter
 * @param word String that i want ot change
 * @returns String with first letter in upper case
 */
export const firstLetterUpperCase = (word: string): string | undefined => {
  let wordToHeader = '';
  if (word) {
    wordToHeader = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return wordToHeader;
};
