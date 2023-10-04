import { Confession } from "./confession";
import { render, screen } from '@testing-library/react';

describe('Confession form', () => {
  test('Form is rendering on the page', () => {
    render(<Confession/>);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test('Confess button is enabled correctly', () => {});

  test('Confess button is disabled correctly', () => {});

  test('Validate component is appearing on the page', () => {});
});