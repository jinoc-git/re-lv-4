import React, { useState } from 'react';
import { styled } from 'styled-components';
import RandomColor from '../../feature/randomColor';
import shortid from 'shortid';
import YouTubePlayer from '../youtube/YouTubePlayer';
import Dots from '../dots/Dots';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';

const DetailContents = ({ post }) => {
  const { title, artist, hash, linkUrl, password } = post;
  const [systemIsOpen, msg, isOpenHanler] = useSystemModal();
  const [pwCheck, setPwCheck] = useState('');
  const [type, setType] = useState('');
  const [changeMsg, setChangeMsg] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const controlPost = (value, type) => {
    if (password !== value) {
      setPwCheck('비밀번호가 틀립니다');
      return false;
    }
    if (type === 'edit') {
      isOpenHanler(false);
    }
    if (type === 'delete' && !confirmDelete) {
      setChangeMsg(true);
      setPwCheck('정말 삭제하시겠습니까?');
    }
  };
  return (
    <DetailContentsLayout>
      <h2 style={{ fontSize: '0px' }}>{title + ' 상세페이지'}</h2>
      <DetailInfoBox>
        <DetailInfoHeader>
          <DetailTitle>{title}</DetailTitle>
          <Dots post={post} isOpenHanler={isOpenHanler} setType={setType} />
        </DetailInfoHeader>
        <DetailArtist>{artist}</DetailArtist>
        <HashBox>
          {hash.map((tag) => {
            return <Hash key={shortid.generate()}>{tag}</Hash>;
          })}
        </HashBox>
        <YouTubePlayerBox>
          <YouTubePlayer linkUrl={linkUrl} />
        </YouTubePlayerBox>
      </DetailInfoBox>
      {systemIsOpen && (
        <SystemModal
          msg={pwCheck ? pwCheck : msg}
          input={changeMsg ? false : true}
          isOpenHanler={isOpenHanler}
          controlPost={controlPost}
          setPwCheck={setPwCheck}
          changeMsg={changeMsg}
          setChangeMsg={setChangeMsg}
          type={type}
          setConfirmDelete={setConfirmDelete}
          id={post.id}
        />
      )}
    </DetailContentsLayout>
  );
};

export default DetailContents;

const DetailContentsLayout = styled.section`
  width: 100%;
  padding-top: 60px;
`;
const DetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
const DetailInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f26419;
`;
const DetailTitle = styled.h3`
  font-size: 20px;
  font-family: 'NanumBarunGothicBold';
  line-height: 1.3;
`;
const DetailArtist = styled.p`
  font-size: 18px;
  font-family: 'NanumBarunGothic';
  line-height: 1.2;
  border-bottom: 1px solid #f26419;
`;
const HashBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Hash = styled.span`
  color: #222;
  font-family: 'NanumBarunGothicLight';
  padding: 3px;
  border-radius: 5px;
  background-color: ${() => RandomColor()};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
`;
const YouTubePlayerBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 640px;
`;
