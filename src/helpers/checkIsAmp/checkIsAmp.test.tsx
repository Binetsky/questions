import React from 'react';
import { render } from '@testing-library/react';
import { ComponentMock } from './ComponentMock';

describe('ComponentMock test suite', () => {
  it('Компонент получил корректные props', () => {
    const { getByText } = render(<ComponentMock />);

    expect(getByText('Simple Page!')).toBeTruthy();
  });
});
