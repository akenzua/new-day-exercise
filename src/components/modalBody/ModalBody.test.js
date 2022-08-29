import { render, screen } from '@testing-library/react';
import ModalBody from './ModalBody';

test('renders modal children ', () => {
  render(
    <ModalBody>
      <p>This is the modal body</p>
    </ModalBody>
  );
  const modalBodyText = screen.getByText(/This is the modal body/i);
  expect(modalBodyText).toBeInTheDocument();
});
