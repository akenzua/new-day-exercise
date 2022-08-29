import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page ', () => {
  render(<App />);
  const pageHeading = screen.getByText(/newday/i);
  expect(pageHeading).toBeInTheDocument();
  const modalButton = screen.getByRole('button', {
    name: /open modal/i,
  });
  expect(modalButton).toBeInTheDocument();
  const pageLink = screen.getByRole('link', {
    name: /officail W3C ARIA Authoring Practices for modals/i,
  });
  expect(pageLink).toBeInTheDocument();
});
