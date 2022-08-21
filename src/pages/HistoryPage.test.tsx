import React from 'react';
import { render, screen } from '@testing-library/react';
import HistoryPage from './HistoryPage';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('navbar is hidden', async () => {
  render(<HistoryPage />);

  expect(screen.getByText('No history of search')).toBeDefined();
});
