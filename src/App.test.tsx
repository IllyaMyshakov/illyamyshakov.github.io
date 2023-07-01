import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe } from 'node:test';

describe("Homepage App", () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.findByRole('application')).toBeInTheDocument();
  });;
});

