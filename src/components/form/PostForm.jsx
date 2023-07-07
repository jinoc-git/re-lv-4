import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Input from '../common/Input';
import usePostInfo from '../../feature/usePostInfo';
import Button from '../common/Button';
import useHashInput from '../../feature/useHashInput';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addPost } from '../../api/post';
import shortid from 'shortid';

const PostForm = ({ fnc }) => {
  const [postInfo, onChangeHandler] = usePostInfo();
  const { title, artist, linkUrl, genre } = postInfo;
  const [hashValue, onHashHandler, addHash] = useHashInput();
  const titleInput = useRef();
  const artistInput = useRef();
  const linkUrlInput = useRef();
  const queryClient = useQueryClient();
  // const query = useQuery(['posts'], addPost);
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

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
    const hashNum = Array.from(hashValue).filter((a) => a === '#').length;
    if (hashNum < 3) {
      alert('해시태그는 최소 3개입니다');
      return false;
    }
    // data 추가 로직
    const hash = [];

    const newPost = {
      id: shortid.generate(),
      ...postInfo,
    };
  };

  return (
    <FormLayout onChange={onChangeHandler} onSubmit={onSubmitHandler}>
      <InfoBox>
        <div>
          <label>
            <Input type={'radio'} name={'genre'} val={'internal'} />
            국내
          </label>
          <label>
            <Input type={'radio'} name={'genre'} val={'abroad'} />
            해외
          </label>
        </div>
        <Input w={'100%'} h={'40px'} name={'title'} refs={titleInput} />
        <Input w={'100%'} h={'40px'} name={'artist'} refs={artistInput} />
        <Input w={'100%'} h={'40px'} name={'linkUrl'} refs={linkUrlInput} />
      </InfoBox>
      <HashTagInput
        value={hashValue}
        onChange={onHashHandler}
        onKeyDown={addHash}
        placeholder="#해시태그"
      />
      <ButtonBox>
        <Button
          fc={'#fff'}
          bc={'#222'}
          size={'small'}
          type={'button'}
          fnc={fnc}>
          취소하기
        </Button>
        <Button fc={'#fff'} bc={'#222'} size={'small'} type={'submit'}>
          등록하기
        </Button>
        <HashParagraph>
          #해시태그는 #최소 #3개 #최대 #6개까지 #가능합니다
        </HashParagraph>
      </ButtonBox>
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
`;
const InfoBox = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
`;
const HashTagInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 0.5px solid #dcdcdc;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
`;
const HashParagraph = styled.p`
  color: #dd5050;
  font-family: 'NanumBarunGothic';
  line-height: 1.4;
`;
