import React from 'react'

import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'

import { gql } from 'apollo-boost'

const withPhoto = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  console.log()
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = withPhoto(ListOfPhotoCardsComponent)
