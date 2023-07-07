import React from 'react'
import Layout from './layout/Layout'
import Contents from './Contents/Contents'
import SearchForm from './form/SearchForm'

const Internal = () => {
  return (
    <Layout>
      <SearchForm />
      <Contents />
    </Layout>
  )
}

export default Internal