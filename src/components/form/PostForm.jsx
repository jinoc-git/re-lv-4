import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Input from '../common/Input';
import usePostInfo from '../../feature/usePostInfo';

const PostForm = () => {
  const [values, onChangeHandler] = usePostInfo();
  const { title, artist, linkUrl } = values;
  const titleInput = useRef();
  const artistInput = useRef();
  const linkUrlInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert('제목을 적어주세요');
      titleInput.current.focus();
      return false;
    }
    if (!artist) {
      alert('가수를 적어주세요');
      artistInput.current.focus();
      return false;
    }
    if (!linkUrl) {
      alert('링크를 적어주세요');
      linkUrlInput.current.focus();
      return false;
    }
  };

  return (
    <FormLayout onChange={onChangeHandler} onSubmit={onSubmitHandler}>
      <InfoBox>
        <Input width={'100'} height={'35'} name={'title'} refs={titleInput} />
        <Input width={'100'} height={'35'} name={'artist'} refs={artistInput} />
        <Input
          width={'100'}
          height={'35'}
          name={'linkUrl'}
          refs={linkUrlInput}
        />
      </InfoBox>
      <button>dd</button>
    </FormLayout>
  );
};

export default PostForm;

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  /* border: 1px solid; */
`;
const InfoBox = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
`;
