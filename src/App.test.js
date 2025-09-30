import {render, screen} from '@testing-library/react';
import SortReact from './sortReact';

test('renders learn react link', () => {
  render(<SortReact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
