import Head from 'next/head';
import Nav from './nav';

// components/Layout.js
import globalStyles from '../styles/global.js';

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
        ></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <style jsx global>
          {globalStyles}
        </style>
      </Head>
      <Nav />
      <Page />
    </div>
  );
};

export default withLayout;
