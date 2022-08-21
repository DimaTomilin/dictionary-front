import { createFetchURL } from './createFetchURL';

describe('testing createUrl function', () => {
  test('create word url', () => {
    expect(createFetchURL({ word: 'cat', partOfSpeech: '' }, 'http://localhost:3000/dictionary/Cat/', '')).toBe(
      'http://localhost:3000/cat',
    );
  });

  test('create part-of-speech url', () => {
    expect(
      createFetchURL({ word: '', partOfSpeech: 'Noun' }, 'http://localhost:3001/dictionary/part-of-speech/Noun', ''),
    ).toBe('http://localhost:3000/part-of-speech/noun');
  });

  test('create part-of-speech url with letter', () => {
    expect(
      createFetchURL({ word: '', partOfSpeech: 'Noun' }, 'http://localhost:3001/dictionary/part-of-speech/Noun', 't'),
    ).toBe('http://localhost:3000/part-of-speech/noun?letter=t');
  });
});
