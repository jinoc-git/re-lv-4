import React from 'react';
import { styled } from 'styled-components';
import Input from '../common/Input';

const SearchForm = () => {
  return (
    <SearchFormLayout>
      <Form>
        <KeepBox></KeepBox>
        <Input type={'text'} width={80} height={50} />
      </Form>
    </SearchFormLayout>
  );
};

export default SearchForm;

const SearchFormLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const KeepBox = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 40%;
  height: 120px;
  margin: 40px 0;
  /* border: 1px solid; */
`;
