import { MisdemeanourList } from "./misdemeanourList";
import { render, screen } from '@testing-library/react';

describe('Misdemeanours List', () => {
  test('Table is appearing on the page', () => {
    render(<MisdemeanourList/>);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test('Filter updates the list on the page', () => {});

  test('ValuesList component is appearing on the page', () => {});
});