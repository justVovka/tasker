import React from 'react';
import { IWrapperModalProps } from './types';
import { ModalContainer, ModalHead, ModalOverlay, ModalWrapper } from './styled';
import ReactDOM from 'react-dom';

export const WrapperModal = ({ children, isVisible, hide, title }: IWrapperModalProps) =>
  isVisible
    ? ReactDOM.createPortal(
        <ModalWrapper>
          <ModalOverlay onClick={hide} />
          <ModalContainer>
            <ModalHead>
              <h4>Task: {title}</h4>
              <span onClick={hide}>✖</span>
            </ModalHead>
            <div>{children}</div>
          </ModalContainer>
        </ModalWrapper>,
        document.body
      )
    : null;
