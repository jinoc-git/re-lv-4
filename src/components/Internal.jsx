import React from 'react'
import Layout from './layout/Layout'
import Contents from './Contents/Contents'
import SearchForm from './form/SearchForm'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/post'

const Internal = () => {
  const { isLoading, isError, data } = useQuery(['posts'], getPosts);

  return (
    <Layout>
      <SearchForm />
      <Contents posts={data} genre={'internal'} />
    </Layout>
  )
}

export default Internal