import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import Button from '../common/Button';

const SystemModal = ({ msg, isOpenHanler }) => {
  useEffect(() => {
    document.body.style = 'overflow: hidden';
    return () => (document.body.style = 'overflow: auto');
  });
  return createPortal(
    <ModalLayout>
      <ModalBox>
        <AlertParagragh>{msg}</AlertParagragh>
        <ButtonBox>
          <Button
            w={'80px'}
            h={'36px'}
            fc={'#fff'}
            bc={'#222'}
            fnc={() => isOpenHanler(false)}>
            확인
          </Button>
        </ButtonBox>
      </ModalBox>
    </ModalLayout>,
    document.getElementById('modal-portal')
  );
};

export default SystemModal;

const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.24);
`;
const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 140px;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid #f26419;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
`;
const AlertParagragh = styled.p`
  cursor: default;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  font-family: 'NanumBarunGothic';
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
