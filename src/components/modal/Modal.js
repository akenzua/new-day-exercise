import { createContext, useEffect, useCallback } from 'react';
import FocusTrap from 'focus-trap-react';
import './Modal.css';

export const modalContext = createContext();

function Modal({ children, onModalClose }) {
  const keyListener = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    },
    [onModalClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });

  return (
    <FocusTrap>
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-content">
          <modalContext.Provider value={{ onModalClose }}>
            {children}
          </modalContext.Provider>
        </div>
      </div>
    </FocusTrap>
  );
}

export default Modal;
