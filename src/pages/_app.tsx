import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
