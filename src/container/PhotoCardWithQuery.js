import React from 'react'

import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'

import { Query } from 'react-apollo'

import Spinner from '../components/Spinner/spinner.js'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderProps = ({ loading, error, data }) => {
  if (loading) {
    return <Spinner />
  }

  if (error) return <p>error!?</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProps}
  </Query>
)
