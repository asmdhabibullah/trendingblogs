import Head from "next/head";
import { LayoutProps } from "../Utils";
import PreLoder from "../components/PreLoder";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="keywords" content="blog" />
                <meta name="MobileOptimized" content="320" />
                <meta name="description" content="Trending Blog - Magazine" />
                <meta name="author" content="As Md Habibullah" />
                <title>Trending Blog - Magazine</title>
                <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />

                {/* 
                <Script strategy="worker" src="/assets/js/jquery.min.js" />
                <Script strategy="worker" src="/assets/js/popper.min.js" />
                <Script strategy="worker" src="/assets/js/bootstrap.min.js" />
                <Script strategy="worker" src="/assets/js/slick.min.js" />
                <Script strategy="worker" src="/assets/js/jquery.sticky-sidebar.min.js" />
                <Script strategy="worker" src="/assets/js/custom.js" /> */}
            </Head>

            {/* <PreLoder /> */}

            {
                children ? children : <PreLoder />
            }
        </>
    )
};

export default Layout;