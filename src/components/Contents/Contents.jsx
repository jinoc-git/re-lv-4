import React from 'react';
import { css, styled } from 'styled-components';
import RandomColor from '../../feature/RandomColor'
import Button from '../common/Button';

const Contents = () => {
  
  return (
    <ContentsLayout>
      {/* <h2>콘텐츠</h2> */}
      <ShareBox>
        <Button size={'small'} bc={'#222'} fc={'#fff'}>공유하기</Button>
      </ShareBox>
      <ContentsList>
        <ContentsItem>
          <ContentsSinger>김태우</ContentsSinger>
          <ContentsTitle>사랑비</ContentsTitle>
          <HashBox>
            <Hash>발라드</Hash>
            <Hash>슬픔</Hash>
            <Hash>조용한</Hash>
            <Hash>숲속에서</Hash>
            <Hash>혼자여행하면서듣기좋은</Hash>
          </HashBox>
        </ContentsItem>
        <ContentsItem>
          <ContentsSinger>윤하</ContentsSinger>
          <ContentsTitle>별의 조각</ContentsTitle>
          <HashBox>
            <Hash>발라드</Hash>
            <Hash>슬픔</Hash>
            <Hash>조용한</Hash>
            <Hash>숲속에서</Hash>
            <Hash>혼자여행하면서듣기좋은</Hash>
          </HashBox>
        </ContentsItem>
        <ContentsItem>
          <ContentsSinger>새소년</ContentsSinger>
          <ContentsTitle>파도</ContentsTitle>
          <HashBox>
            <Hash>발라드</Hash>
            <Hash>슬픔</Hash>
            <Hash>조용한</Hash>
            <Hash>숲속에서</Hash>
            <Hash>혼자여행하면서듣기좋은</Hash>
          </HashBox>
        </ContentsItem>
        <ContentsItem>
          <ContentsSinger>부석순</ContentsSinger>
          <ContentsTitle>파이팅 해야지</ContentsTitle>
          <HashBox>
            <Hash>발라드</Hash>
            <Hash>슬픔</Hash>
            <Hash>조용한</Hash>
            <Hash>숲속에서</Hash>
            <Hash>혼자여행하면서듣기좋은</Hash>
          </HashBox>
        </ContentsItem>
      </ContentsList>
    </ContentsLayout>
  );
};

export default Contents;

const ContentsLayout = styled.section`
  width: 100%;
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
const ContentsSinger = styled.h3`
  color: #222;
  font-size: 18px;
  font-family: 'NanumBarunGothicBold';
`;
const ContentsTitle = styled.h4`
  color: #222;
  font-size: 16px;
  font-family: 'NanumBarunGothic';
`
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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
`;
