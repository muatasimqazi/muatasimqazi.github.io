import Head from 'next/head'

// components/Layout.js
import globalStyles from '../styles/global.js'
import Footer from './Footer'
import Navbar from './Nav'

const withLayout = Page => {
  return () => (
    <div>
      <Head>
        <title>Muatasim Qazi</title>
        <meta name="viewport" content="width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../static/favicon.png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <style jsx global>
          {globalStyles}
        </style>

        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
          integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default withLayout
