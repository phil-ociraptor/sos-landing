import { createContext } from 'react'
import { ApolloProvider, gql } from '@apollo/client'
import ProjectsList from '../components/ProjectsList'

import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://sos-showcase.herokuapp.com/v1/graphql',
    headers: {
      'x-hasura-access-key': `${process.env.NEXT_PUBLIC_HASURA_ACCESS_KEY}`,
    },
    fetch,
  }),
  cache: new InMemoryCache(),
})

export default function ProjectsPage() {
  return (
    <ApolloProvider client={client}>
      <ProjectsList />
    </ApolloProvider>
  )
}
