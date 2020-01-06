import React from 'react'
import { Layout } from '../components/Layout'

import { FavsWithQuery } from '../container/GetFavorites'

export default () => (

  <Layout title='Tus Favoritos' subtitle='Aqui encontraras tus Favoritos'>

    <FavsWithQuery />

  </Layout>
)
