import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <title>BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      
      <body className="antialiased bg-gray-800 text-gray-100">
        <Main />
        <NextScript />

        <div id="modal-root" className="relative z-10"></div>
      </body>
    </Html>
  )
}
