import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from '@jest/globals';
import HeaderNavbar from './HeaderNavbar';

const mockedUsedNavigate = jest.fn();

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('navbar is hidden, and becomes visiable after click', async () => {
  render(<HeaderNavbar />);
  expect(screen.queryByRole('dialog')).toBeNull();
  userEvent.click(screen.getByRole('side-bar-button'));
  expect(screen.getByRole('dialog')).toBeDefined();
});
