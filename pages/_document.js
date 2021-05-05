import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async defer
            src="https://0h95g4k825.execute-api.us-east-1.amazonaws.com/dev/tracio.js"
          />
        </body>
      </Html>
    );
  }
}
