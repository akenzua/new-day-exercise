import FocusTrap from 'focus-trap-react';
import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

let modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

export const modalContext = createContext();

export default function Modal({
  children,
  onModalClose,
  isModalOpen,
}) {
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  });

  const keyListenersMap = new Map([[27, onModalClose]]);
  return ReactDOM.createPortal(
    <FocusTrap active={isModalOpen}>
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
    </FocusTrap>,
    modalRoot
  );
}
