import { render, screen } from '@testing-library/react';
import { ValuesList, ValuesListProps } from './valuesList';

describe('ValuesList Component', () => {

  test('When ValuesList component is rendered, date will appear', () => {
    //arrange
    const requiredProps: ValuesListProps = {
      citizenID: 3456,
      date: '05/10/23',
      misdemeanour: 'rudeness'
    };

    //act 
    render(<ValuesList {...requiredProps}/>);

    //arrange
    expect(screen.getByText(requiredProps.date)).toBeInTheDocument();


  });
});