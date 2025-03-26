import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('should render correctly', () => {
    render(
      <Select>
        <option value="">Selecione uma opção</option>
      </Select>,
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
