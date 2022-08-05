export const firstLetterUpperCase = (word: string): string | undefined => {
  let wordToHeader = '';
  if (word) {
    wordToHeader = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return wordToHeader;
};
