import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { toast } from 'react-toastify'


const anilistLink = ApolloLink.from([
  onError(({ response }) => {
    response?.errors?.forEach(({ message }) => {
      toast(`Error while getting data from AniList: ${message}`, { type: 'error' })
    })

    // this is not a hack: https://www.apollographql.com/docs/react/data/error-handling/#ignoring-errors
    if (response?.errors) response.errors = undefined
  }),
  new HttpLink({
    uri: 'graphql.anilist.co',
  }),
])

const backendLink = ApolloLink.from([
  onError(({ response }) => {
    response?.errors?.forEach(({ message }) => {
      toast(`Error while getting data the API: ${message}`, { type: 'error' })
    })

    if (response?.errors) response.errors = undefined
  }),
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }),
])


export const apolloClient = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().client === 'anilist', anilistLink, backendLink,
  ),
  cache: new InMemoryCache(),
})

