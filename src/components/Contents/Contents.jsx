import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import RandomColor from '../../feature/randomColor';
import Button from '../common/Button';
import Modal from '../modal/Modal';
import shortid from 'shortid';

const Contents = ({ posts, genre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ContentsLayout>
      <h2 style={{fontSize: '0px'}}>{genre ? genre : 'home'}</h2>
      <ShareBox>
        <Button
          size={'small'}
          bc={'#222'}
          fc={'#fff'}
          fnc={isOpenToggleHandler}>
          공유하기
        </Button>
      </ShareBox>
      <ContentsList>
        {posts
          ?.filter((post) => (genre ? post.genre === genre : post))
          .map((post) => {
            return (
              <ContentsItem key={post.id}>
                <ContentsArtist>{post.artist}</ContentsArtist>
                <ContentsTitle>{post.title}</ContentsTitle>
                <HashBox>
                  {post.hash.map((tag) => {
                    return <Hash key={shortid.generate()}>{tag}</Hash>;
                  })}
                </HashBox>
              </ContentsItem>
            );
          })}
      </ContentsList>
      {isOpen && <Modal fnc={isOpenToggleHandler} />}
    </ContentsLayout>
  );
};

export default Contents;

const ContentsLayout = styled.section`
  width: 100%;

  /* lv4에만 적용 */
  padding-top: 100px;
  @media only screen and (max-width: 1024px) {
    padding-top: 60px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  margin: 0 auto;
`;
const ContentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 80%;
  margin: 20px auto 0;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ContentsItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ContentsArtist = styled.h3`
  color: #222;
  font-size: 18px;
  font-family: 'NanumBarunGothicBold';
`;
const ContentsTitle = styled.h4`
  color: #222;
  font-size: 16px;
  font-family: 'NanumBarunGothic';
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
