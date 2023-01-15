// CSS import
// import "../public/assets/css/bootstrap.min.css";
// import "../public/assets/css/all.min.css";
// import "../public/assets/css/slick.css";
// import "../public/assets/css/simple-line-icons.css";
// import "../public/assets/css/style.css";

// JS Import
// import "../public/assets/js/jquery.min.js";
// import "../public/assets/js/popper.min.js";
// import "../public/assets/js/bootstrap.min.js";
// import "../public/assets/js/slick.min.js";
// import "../public/assets/js/jquery.sticky-sidebar.min.js";
// import "../public/assets/js/custom.js";

import Head from "next/head";
import type { AppProps } from "next/app";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import PreLoder from "../components/PreLoder";
import HeroComponent from "../components/HeroComponent";
import SearchComponent from "../components/SearchComponent";
import Layout from "../Layout";

const TBApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <div className="site-wrapper">
          <div className="main-overlay"></div>
          <Navbar />
          <HeroComponent />
          {/* <AdHeader /> */}
          <Component {...pageProps} />
          <Footer />
        </div>
        <SearchComponent />

      </Layout>
      <div className="canvas-menu d-flex align-items-end flex-column">

        <button type="button" className="btn-close" aria-label="Close"></button>


        <div className="logo">
          <img src="/assets/images/logo.svg" alt="Katen" />
        </div>


        <nav>
          <ul className="vertical-menu">
            <li className="active">
              <a href="index-2.html">Home</a>
              <ul className="submenu">
                <li><a href="index-2.html">Magazine</a></li>
                <li><a href="personal.html">Personal</a></li>
                <li><a href="personal-alt.html">Personal Alt</a></li>
                <li><a href="minimal.html">Minimal</a></li>
                <li><a href="classNameic.html">ClassNameic</a></li>
              </ul>
            </li>
            <li><a href="category.html">Lifestyle</a></li>
            <li><a href="category.html">Inspiration</a></li>
            <li>
              <a href="#">Pages</a>
              <ul className="submenu">
                <li><a href="category.html">Category</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
                <li><a href="blog-single-alt.html">Blog Single Alt</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>


        <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default TBApp;


// import "jquery/"


// import "../public/assets/css/bootstrap.min.css";
// import "../public/assets/css/all.min.css";
// import "../public/assets/css/slick.css";


// import "/assets/js/jquery.min.js"
// import "/assets/js/jquery.min.js"
// import "/assets/js/jquery.min.js"
// import "/assets/js/jquery.min.js"
// import "/assets/js/jquery.min.js"
// import "/assets/js/jquery.min.js"

{/* <script src="/assets/js/jquery.min.js" type="text/javascript"></script>
                    <script src="/assets/js/popper.min.js" type="text/javascript"></script>
                    <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>
                    <script src="/assets/js/slick.min.js" type="text/javascript"></script>
                    <script src="/assets/js/jquery.sticky-sidebar.min.js" type="text/javascript"></script>

p'

// import AdHeader from "../components/Navbar/AdHeader";

        {/* <link rel="stylesheet" href="../styles/asstes/css/bootstrap.min.css" />  */}
{/* <link rel="shortcut icon" type="image/png" href="/assets/images/favicon.png" /> */ }


{/* <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all">

          <link rel="stylesheet" href="css/all.min.css" type="text/css" media="all">

            <link rel="stylesheet" href="css/slick.css" type="text/css" media="all">

              <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" media="all">

                <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
 */}