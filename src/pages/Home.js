import React from 'react'
import { Layout } from '../components/Layout'

import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='PetGram - tu App de fotos para mascotas' subtitle='Con petGram puedes encontrar fotos de animales domesticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
