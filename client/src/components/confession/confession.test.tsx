import { Confession } from "./confession";
import { render, screen } from '@testing-library/react';

describe('Confession form', () => {
  test('Form is rendering on the page', () => {
    render(<Confession/>);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  test('Confess button is enabled correctly', () => {

  });

  test('Confess button is disabled upon initial render', () => {
    render(<Confession/>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

  });

  test('Validate component is appearing on the page', () => {
    render(<Confession/>);
    const validate = screen.getByText("To submit, make sure to write a subject and details.");
    expect(validate).toBeInTheDocument();
  });
});