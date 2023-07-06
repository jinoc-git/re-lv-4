import React from 'react'
import Layout from './layout/Layout'
import SearchForm from './form/SearchForm'
import Contents from './Contents/Contents'

const Home = () => {
  return (
    <Layout>
      <SearchForm />
      <Contents />
    </Layout>
  )
}

export default Home