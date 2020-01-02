import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Spinner from '../components/Spinner/spinner'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
  favs {
    id,
    categoryId,
    src,
    likes,
    userId,
  }
}
`
const renderProps = ({ loading, error, data }) => {
  if (loading) return <Spinner />
  if (error) {
    console.log(error)
    return 'ha ocurrido un error'
  }
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProps}
  </Query>
)
