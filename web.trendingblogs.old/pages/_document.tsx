import Document, {
    Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from 'next/document'
import Script from 'next/script';
// import { ServerStyleSheet } from 'styled-components'

class TBAppDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    // static async getInitialProps(
    //     ctx: DocumentContext
    // ): Promise<DocumentInitialProps> {
    //     const sheet = new ServerStyleSheet();
    //     const originalRenderPage = ctx.renderPage;

    //     try {
    //         ctx.renderPage = () =>
    //             originalRenderPage({
    //                 enhanceApp: (App) => (props) =>
    //                     sheet.collectStyles(<App {...props} />),
    //             });

    //         const initialProps = await Document.getInitialProps(ctx);
    //         return {
    //             ...initialProps,
    //             styles: (
    //                 <>
    //                     {initialProps.styles}
    //                     {sheet.getStyleElement()}
    //                 </>
    //             ),
    //         };
    //     } finally {
    //         sheet.seal();
    //     }
    // };

    render(): JSX.Element {
        // const { styles } = this.props as any;
        return (
            <Html lang="en">
                <Head>
                    {/* {styles} */}

                    {/* CSS CDN */}
                    <link rel="stylesheet" href="./assets/css/bootstrap.min.css" type="text/css" media="all"></link>
                    <link rel="stylesheet" href="./assets/css/all.min.css" type="text/css" media="all"></link>
                    <link rel="stylesheet" href="./assets/css/slick.css" type="text/css" media="all"></link>
                    <link rel="stylesheet" href="./assets/css/simple-line-icons.css" type="text/css" media="all"></link>
                    <link rel="stylesheet" href="./assets/css/style.css" type="text/css" media="all"></link>

                    <Script strategy="beforeInteractive" src="./assets/js/jquery.min.js" />
                    <Script strategy="beforeInteractive" src="./assets/js/popper.min.js" />
                    <Script strategy="beforeInteractive" src="./assets/js/bootstrap.min.js" />
                    <Script strategy="beforeInteractive" src="./assets/js/jquery.sticky-sidebar.min.js" />
                    <Script strategy="beforeInteractive" src="./assets/js/slick.min.js" />
                    <Script strategy="lazyOnload" src="./assets/js/custom.js" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default TBAppDocument;


{/* <Script strategy="lazyOnload" src="./assets/js/jquery.min.js" />
<Script strategy="lazyOnload" src="./assets/js/popper.min.js" />
<Script strategy="lazyOnload" src="./assets/js/bootstrap.min.js" />
<Script strategy="lazyOnload" src="./assets/js/jquery.sticky-sidebar.min.js" />
<Script strategy="lazyOnload" src="./assets/js/slick.min.js" />
<Script strategy="lazyOnload" src="./assets/js/custom.js" /> */}

// Script strategy = "beforeInteractive" src = "./assets/js/jquery.min.js" />
//                     <Script strategy="beforeInteractive" src="./assets/js/popper.min.js" />
//                     <Script strategy="beforeInteractive" src="./assets/js/bootstrap.min.js" />
//                     <Script strategy="beforeInteractive" src="./assets/js/jquery.sticky-sidebar.min.js" />
//                     <Script strategy="beforeInteractive" src="./assets/js/slick.min.js" />
//                     <Script strategy="lazyOnload" src="./assets/js/custom.js" />

// import { ServerStyleSheet } from 'styled-components';
// import Document, { Html, Head, Main, NextScript } from 'next/document';


// static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//         ctx.renderPage = () =>
//             originalRenderPage({
//                 enhanceApp: (App) => (props) =>
//                     sheet.collectStyles(<App {...props} />),
//             });
//         const initialProps = await Document.getInitialProps(ctx);
//         return {
//             ...initialProps,
//             styles: (
//                 <>
//                     {initialProps.styles}
//                     {sheet.getStyleElement()}
//                 </>
//             ),
//         }
//     } finally {
//         sheet.seal()
//     };
// static async getInitialProps(
//     ctx: DocumentContext
// ): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet();
//     // const originalRenderPage = ctx.renderPage

//     const initialProps = await Document.getInitialProps(ctx);

//     try {
//         return {
//             ...initialProps,
//             styles: (
//                 <>
//                     {initialProps.styles}
//                     {sheet.getStyleElement()}
//                 </>
//             ),
//         } finally {
//             sheet.seal();
//         }

//         // return initialProps
//     };


{/* <script src="/assets/js/jquery.min.js" type="text/javascript" async={true} crossOrigin="anonymous"></script>
                        <script src="/assets/js/popper.min.js" type="text/javascript" async={true} crossOrigin="anonymous"></script>
                        <script src="/assets/js/bootstrap.min.js" type="text/javascript" async={true} crossOrigin="anonymous"></script>
                        <script src="/assets/js/slick.min.js" type="text/javascript" async={true} crossOrigin="anonymous"></script>
                        <script src="/assets/js/jquery.sticky-sidebar.min.js" type="text/javascript" async={true} crossOrigin="anonymous"></script>
                        <script src="/assets/js/custom.js" type="text/javascript" async={true} crossOrigin="anonymous"></script> */}

// import Document, {
//     Html, Head, Main, NextScript, DocumentContext
// } from 'next/document'
// import Script from 'next/script';
// // import Script from "next/script"

// class TrendingblogsAppDocument extends Document {
//     static async getInitialProps(ctx: DocumentContext) {
//         const originalRenderPage = ctx.renderPage

//         // Run the React rendering logic synchronously
//         ctx.renderPage = () =>
//             originalRenderPage({
//                 // Useful for wrapping the whole react tree
//                 enhanceApp: (App) => App,
//                 // Useful for wrapping in a per-page basis
//                 enhanceComponent: (Component) => Component,
//             });

//         // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//         const initialProps = await Document.getInitialProps(ctx)

//         return initialProps
//     }

//     render() {
//         return (
//             <Html>
//                 <Head>


//                     {/* CSS CDN */}

//                     <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"></link>
//                     <link href="/assets/css/all.min.css" rel="stylesheet" type="text/css" media="all"></link>
//                     <link href="/assets/css/slick.css" rel="stylesheet" type="text/css" media="all"></link>
//                     <link href="/assets/css/simple-line-icons.css" rel="stylesheet" type="text/css" media="all"></link>
//                     <link href="/assets/css/style.css" rel="stylesheet" type="text/css" media="all"></link>
//                     {/* <link rel="stylesheet" href="style.css" /> */}

//                     {/* JS CDN */}

//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                     {/* <script src="/assets/js/jquery.min.js" type="text/javascript"></script>
//                     <script src="/assets/js/popper.min.js" type="text/javascript"></script>
//                     <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>
//                     <script src="/assets/js/slick.min.js" type="text/javascript"></script>
//                     <script src="/assets/js/jquery.sticky-sidebar.min.js" type="text/javascript"></script>
//                     <script src="/assets/js/custom.js" type="text/javascript"></script> */}

//                     <Script src="/assets/js/jquery.min.js" type="text/javascript"></Script>
//                     <Script src="/assets/js/popper.min.js" type="text/javascript"></Script>
//                     <Script src="/assets/js/bootstrap.min.js" type="text/javascript"></Script>
//                     <Script src="/assets/js/slick.min.js" type="text/javascript"></Script>
//                     <Script src="/assets/js/jquery.sticky-sidebar.min.js" type="text/javascript"></Script>
//                     <Script src="/assets/js/custom.js" type="text/javascript"></Script>
//                 </body>
//             </Html>
//         )
//     }
// }

// export default TrendingblogsAppDocument;






// const { buildManifest } = this.props;
// const { css, js } = buildManifest;

// console.log("csscsscsscss", css);
// console.log("jsjsjsjs", js);
{/* <link rel="stylesheet" type="text/css" href="/asstes/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/asstes/css/font-awesome.css" />
        <link rel="stylesheet" type="text/css" href="/asstes/js/plugins/swiper/swiper.css" />
        <link rel="stylesheet" type="text/css" href="/asstes/js/plugins/magnific/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="/asstes/css/style.css" /> */}
{/* <script type="text/javascript" src="/assets/js/jquery.js" ></Script>
        <script type="text/javascript" src="/assets/js/bootstrap.min.js" ></script>
        <script type="text/javascript" src="/assets/js/theia-sticky-sidebar.js" ></script>
        <script type="text/javascript" src="/assets/js/plugins/swiper/swiper.min.js" ></script>
        <script type="text/javascript" src="/assets/js/plugins/magnific/jquery.magnific-popup.min.js" ></script>
        <script type="text/javascript" src="/assets/js/wow.min.js" ></script>
        <script type="text/javascript" src="/assets/js/custom.js" ></script> */}

{/* <script src="/assets/js/jquery.min.js" type="text/javascript"></script>
        <script src="/assets/js/popper.min.js" type="text/javascript"></script>
        <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="/assets/js/slick.min.js" type="text/javascript"></script>
        <script src="/assets/js/jquery.sticky-sidebar.min.js" type="text/javascript"></script> */}

{/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossOrigin="anonymous"></script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js" type="text/javascript"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/sticky-sidebar/3.3.1/sticky-sidebar.min.js" type="text/javascript"></script>

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css" /> */}