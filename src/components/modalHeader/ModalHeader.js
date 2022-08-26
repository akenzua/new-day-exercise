import React, { useContext } from 'react';
import { modalContext } from '../modal/Modal';
import { ReactComponent as Cancel } from './cancel.svg';

import './ModalHeader.css';

const ModalHeader = ({ children }) => {
  const { onModalClose } = useContext(modalContext);

  return (
    <div className="modal-header">
      {children}
      <button
        className="cancel-button"
        aria-label="close modal"
        onClick={onModalClose}
        type="button"
      >
        <Cancel />
      </button>
    </div>
  );
};

export default ModalHeader;
