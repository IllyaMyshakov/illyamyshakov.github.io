import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { describe } from 'node:test';

describe("Homepage App", () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.findByText("About")).toBeInTheDocument();
  });;
});

