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
          <meta name="title" content="Utils, Tools and more!" />
          <meta name="theme-color" content="#1f1d2b" />
          <meta
            name="description"
            content="A Util page with all kinds of tools, generators, code snippets, useful links, calculators, important formulas, data visualisation and much more!"
          />
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
