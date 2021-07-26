import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-UK">
        <Head>
          <meta name="theme-color" content="#1f1d2b" />
          <meta httpEquiv="content-Type" content="text/html; utf-8" />
          <meta name="robots" content="INDEX,FOLLOW" />
          <meta httpEquiv="content-Language" content="de" />
          <meta
            name="description"
            content="A Util page with all kinds of tools, generators, code snippets, useful links, calculators, important formulas, data visualisation and much more!"
          />
          <meta name="author" content="m2vi" />
          <meta name="publisher" content="m2v" />
          <meta name="audience" content="Experten" />
          <meta name="page-type" content="Software Download" />
          <meta name="page-topic" content="Computer" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
