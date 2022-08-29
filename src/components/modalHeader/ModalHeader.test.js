import { render, screen } from '@testing-library/react';
import ModalHeader from './Modalheader';
import { modalContext } from '../modal/Modal';

const { Provider } = modalContext;
const onModalClose = jest.fn();

function renderModalHeader(onModalClose) {
  return render(
    <Provider value={{ onModalClose }}>
      <ModalHeader>
        <p>This is the modal heading</p>
      </ModalHeader>
    </Provider>
  );
}

test('renders modal children ', () => {
  renderModalHeader();
  const modalBodyText = screen.getByText(
    /This is the modal Heading/i
  );
  expect(modalBodyText).toBeInTheDocument();
});

test('renders cancel button ', () => {
  renderModalHeader(onModalClose);
  const cancelButton = screen.getByRole('button', {
    name: 'close modal',
  });
  expect(cancelButton).toBeInTheDocument();
  cancelButton.click();
  expect(onModalClose).toHaveBeenCalled();
});
