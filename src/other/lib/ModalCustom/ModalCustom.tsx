import React, { ReactNode, FC, ReactElement } from 'react';
import Modal from 'react-modal';

import './ModalCustom.scss';

interface ModalCustomProps {
  isModalOpen: boolean;
  children: ReactNode;
  toggle: () => void;
}

Modal.setAppElement('#root');

const ModalCustom: FC<ModalCustomProps> = ({
  isModalOpen,
  children,
  toggle
}): ReactElement => {
  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={toggle}
    >
      <button onClick={toggle} className="ReactModal__btnClose" type="button">
        &times;
      </button>
      {children}
    </Modal>
  );
};

export default ModalCustom;
