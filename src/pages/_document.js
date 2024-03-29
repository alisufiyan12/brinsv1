import Document, { Html, Head, Main, NextScript } from 'next/document';
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Html lang="en-US">
        <Head >
          <link rel="shortcut icon" href="/favicon.svg"/>  
        </Head>
          <body>
            <Main />
            <NextScript />      
          </body>
      </Html>
    );
  }
}

export default CustomDocument;
