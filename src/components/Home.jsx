import React from 'react';
import Layout from './layout/Layout';
import SearchForm from './form/SearchForm';
import Contents from './Contents/Contents';
import { getPosts } from '../api/post';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { isLoading, isError, data } = useQuery(['posts'], getPosts);
  return (
    <Layout>
      <SearchForm />
      <Contents posts={data}/>
    </Layout>
  );
};

export default Home;
