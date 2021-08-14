import Meta from '@components/Meta';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { NextSeo } from 'next-seo';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <NextSeo
            description="A Page with Apps, Programs, Stuff, Files, Stuff and much more like rick rolls!"
            title="Smarto"
            defaultTitle="Smarto"
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
