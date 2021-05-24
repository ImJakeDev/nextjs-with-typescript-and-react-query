import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

export default function MyApp({ Component, pageProps }: AppProps) {
  // not sure if any is the best type to use here
  const queryClientRef: any = React.useRef()
  console.log(queryClientRef);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}