import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { apolloClient } from '../gql/client'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps}/>
        <ToastContainer/>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
