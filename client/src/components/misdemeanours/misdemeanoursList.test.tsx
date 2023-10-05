import { MisdemeanourList } from "./misdemeanourList";
import { render, screen } from '@testing-library/react';

describe('MisdemeanoursList Component', () => {
  test('Table is appearing on the page', () => {
    render(<MisdemeanourList/>);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test('Filter updates the list on the page', () => {});
});