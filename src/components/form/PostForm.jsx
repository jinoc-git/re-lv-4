import React, { useRef } from 'react';
import { styled } from 'styled-components';
import Input from '../common/Input';
import usePostInfo from '../../feature/usePostInfo';
import Button from '../common/Button';
import useHashInput from '../../feature/useHashInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost } from '../../api/post';
import shortid from 'shortid';
import postValidation from '../../feature/postValidation';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';

const PostForm = ({ fnc }) => {
  const [postInfo, onChangeHandler] = usePostInfo();
  const [hashValue, onHashHandler, addHash] = useHashInput();
  const [isOpen, msg, isOpenHanler] = useSystemModal();

  const titleInput = useRef();
  const artistInput = useRef();
  const linkUrlInput = useRef();
  const refs = { titleInput, artistInput, linkUrlInput };

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (postValidation(postInfo, refs, isOpenHanler)) {
      const checkedHash = postInfo.hash.filter((h) => h !== '');
      const hash = [...checkedHash];
      const newPost = {
        id: shortid.generate(),
        ...postInfo,
        hash,
      };
      mutation.mutate(newPost);
      fnc();
    }
  };

  return (
    <FormLayout onChange={onChangeHandler} onSubmit={onSubmitHandler}>
      <InfoBox>
        <RadioBox>
          <label>
            <Input type={'radio'} name={'genre'} val={'internal'} />
            국내
          </label>
          <label>
            <Input type={'radio'} name={'genre'} val={'abroad'} />
            해외
          </label>
        </RadioBox>
        <Input w={'100%'} h={'40px'} name={'title'} refs={titleInput} />
        <Input w={'100%'} h={'40px'} name={'artist'} refs={artistInput} />
        <Input w={'100%'} h={'40px'} name={'linkUrl'} refs={linkUrlInput} />
      </InfoBox>
      <HashTagInput
        name="hash"
        value={hashValue}
        onChange={onHashHandler}
        onKeyDown={addHash}
      />
      <ButtonBox>
        <Button
          fc={'#fff'}
          bc={'#222'}
          size={'small'}
          type={'button'}
          fnc={fnc}>
          취소
        </Button>
        <Button fc={'#fff'} bc={'#222'} size={'small'} type={'submit'}>
          등록
        </Button>
        <HashParagraph>
          #해시태그는 #최소 #3개 #최대 #6개까지 #가능합니다
        </HashParagraph>
      </ButtonBox>
      {isOpen && <SystemModal msg={msg} isOpenHanler={isOpenHanler} />}
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
const RadioBox = styled.div``;
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
