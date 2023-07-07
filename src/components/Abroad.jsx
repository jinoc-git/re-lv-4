import React from 'react';
import Layout from './layout/Layout';
import SearchForm from './form/SearchForm';
import Contents from './Contents/Contents';
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/post'

const Abroad = () => {
  const { isLoading, isError, data } = useQuery(['posts'], getPosts);

  return (
    <Layout>
      <SearchForm />
      <Contents posts={data} genre={'abroad'} />
    </Layout>
  );
};

export default Abroad;
