import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import HistoryElement from './HistoryElement';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('history element renders', async () => {
  render(<HistoryElement word='Cat' date='10:56:38 10-8-2022' />);
  expect(screen.getByText('Cat')).toBeDefined;
  expect(screen.getByText('10:56:38 10-8-2022')).toBeDefined;
});
