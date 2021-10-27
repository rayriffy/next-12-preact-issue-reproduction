import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Context } from '../context'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>demo</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  )
}

export default NextApp
