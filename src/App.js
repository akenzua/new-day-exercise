import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import ModalHeader from './components/modalHeader/ModalHeader';
import ModalBody from './components/modalBody/ModalBody';

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>NewDay: Accessible Modal</h1>
      <h2>The Modal</h2>
      <section>
        <p>
          This is a modal that is accessible to all users. We will be
          following the {}
          <a
            href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/"
            target="_blank"
            rel="noreferrer"
          >
            officail W3C ARIA Authoring Practices for modals
          </a>
          .
        </p>
        <p>
          The modal that will be invoked on this page is made up of
          reusable components, consisting of a Modal, ModalHeader and
          ModalBody. The Modal component is the parent of the
          ModalHeader and ModalBody components. The ModalHeader and
          ModalBody components are siblings. The Modal component is
          responsible for the modal's accessibility features, such as
          trapping focus within the modal, and closing the modal when
          the user presses the escape key.
        </p>
        <p>
          The ModalHeader and ModalBody components are responsible for
          the modal's visual appearance. The ModalHeader component
          contains a button that closes the modal when clicked. The
          ModalBody component contains the modal's content.
        </p>
        <button onClick={() => setIsModalOpen(true)}>
          open modal
        </button>

        <p>
          The root component - App, initializes the modal's state to
          closed. When the user clicks the button, the modal's state
          is set to open, and the modal is rendered. When the user
          clicks the modal's close button, the modal's state is set to
          closed, and the modal is removed from the DOM.
        </p>
      </section>

      {isModalOpen && (
        <Modal
          onModalClose={() => setIsModalOpen(false)}
          isModalOpen={isModalOpen}
        >
          <ModalHeader>
            <h1 className="modal-heading">Heading</h1>
          </ModalHeader>
          <ModalBody>
            <p>
              According to the W3C's ARIA Authoring Practices 1.1, the
              modal's role is dialog, and the modal's aria-modal
              attribute is true.
            </p>
            <p>
              <span>
                The method for setting state for modal close was
                shared among other components with useContext, this is
                because the modal component can have as many children
                as posible.
              </span>
            </p>
            <p>
              Articles on accessible modal components can be found at
              the following links:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Officail W3C ARIA Authoring Practices for Modalsss
                </a>
              </li>
              <li>
                <a
                  href="http://web-accessibility.carnegiemuseums.org/code/dialogs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Accessibility Guideline v1.0: Dialogs
                </a>
              </li>
              <li>
                <a
                  href="https://developer.yoast.com/blog/the-a11y-monthly-making-modals-accessible/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The a11y Monthly: Making modals accessible
                </a>
              </li>
            </ul>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}

export default App;
