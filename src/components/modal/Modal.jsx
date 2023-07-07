import React from 'react';
import { styled } from 'styled-components';
import PostForm from '../form/PostForm';
import { createPortal } from 'react-dom';

const Modal = ({ fnc }) => {
  return createPortal(
    <ModalLayout>
      <ModalBox>
        <PostForm fnc={fnc} />
      </ModalBox>
    </ModalLayout>,
    document.getElementById('modal-portal')
  );
};

export default Modal;

const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  max-width: 580px;
  height: 40%;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    width: 60%;
    
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
    
  }
`;
