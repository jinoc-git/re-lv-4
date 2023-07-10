import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../../api/post';

const Dots = ({ post, isOpenHanler, setType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, artist, hash, linkUrl, password } = post;

  // const queryClient = useQuery();

  return (
    <DotAreaBox>
      <DotsWrapperBtn onClick={isOpenHandler} onBlur={() => setIsOpen(false)}>
        <DotSpan />
        <DotSpan />
        <DotSpan />
      </DotsWrapperBtn>
      {isOpen && (
        <OptionsList>
          <OptionItem
            onMouseDown={() => {
              isOpenHanler(true, '비밀번호를 입력해 주세요');
              setType('edit');
            }}>
            수정
          </OptionItem>
          <OptionItem
            onMouseDown={() => {
              isOpenHanler(true, '비밀번호를 입력해 주세요');
              setType('delete');
            }}>
            삭제
          </OptionItem>
        </OptionsList>
      )}
    </DotAreaBox>
  );
};

export default Dots;

const DotAreaBox = styled.div`
  position: relative;
`;
const DotsWrapperBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 10px;
  background-color: #fafafa;
`;
const DotSpan = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`;
const OptionsList = styled.ul`
  cursor: pointer;
  position: absolute;
  right: -80px;
  top: 10px;
  width: 80px;
  border: 0.5px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const OptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  &:hover {
    color: #fff;
    background-color: #f26419;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
