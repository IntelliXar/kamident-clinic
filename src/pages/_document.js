import TopBanner from '@/components/banner'
import CopyRight from '@/components/btBanner'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Title from '@/components/title'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <Title />
          <link rel="icon" href="/logo/favicon.png" />
          <meta name="theme-color" content="#90e0ef" />
          <meta name="description" content="Welcome to Kamident Clinic, your trusted dental care provider in Githurai, Nairobi. " />
          
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
        <CopyRight />
      </body>
    </Html>
  )
}
