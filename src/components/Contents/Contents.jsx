import React from 'react';
import { css, styled } from 'styled-components';
import RandomColor from '../../feature/RandomColor'

const Contents = () => {
  
  return (
    <ContentsLayout>
      {/* <h2>콘텐츠</h2> */}
      <ShareBox>공유하기</ShareBox>
      <ContentsList>
        <ContentsItem>
          <ContentsTitle>title1</ContentsTitle>
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
  background-color: #F7F7F2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ContentsTitle = styled.h3`
  color: #333;
  font-size: 20px;
`;
const HashBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Hash = styled.span`
  color: #333;
  font-weight: 700;
  padding: 3px;
  border-radius: 5px;
  background-color: ${() => RandomColor()};
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 3px 0px, rgba(255, 255, 255, 0.4) 0px 0px 0px 1px;
`;
