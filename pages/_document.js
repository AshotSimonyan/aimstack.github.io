import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html>
                <Head>
                <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
