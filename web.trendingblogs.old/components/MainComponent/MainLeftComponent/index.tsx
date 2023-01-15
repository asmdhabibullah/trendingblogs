import { MenuItems } from "../MenuItems";
// import SubHeader from "../SubHeader";
// import { classNamees } from "../../Utils/Enums";
// import TredingGrid from "../GridRunner/TredingGrid";
// import { SubHeaderProps } from "../../Utils/Interfaces";

const MainLeftComponent = () => {

    const {
        TRENDING,
        HEALTH,
        TRAVEL,
        LIFESTYLE,
        TECHNOLOGY
    } = MenuItems();

    // const displayGridsHandeler = (grid?: SubHeaderProps) => {
    //     if (grid) {
    //         switch (grid.classNameData) {
    //             case classNamees.TRENDING:
    //                 // console.log(grid);
    //                 return <TredingGrid {...grid} />
    //                 break;
    //             case classNamees.HEALTH:
    //                 // console.log(grid);
    //                 return (
    //                     <>
    //                         <SubHeader {...grid} />
    //                     </>
    //                 )
    //                 break;
    //             case classNamees.TRAVEL:
    //                 // console.log(grid);
    //                 return (
    //                     <>
    //                         <SubHeader {...grid} />
    //                     </>
    //                 )
    //                 break;
    //             case classNamees.LIFESTYLE:
    //                 // console.log(grid);
    //                 return (
    //                     <>
    //                         <SubHeader {...grid} />
    //                     </>
    //                 )
    //                 break;
    //             case classNamees.TECHNOLOGY:
    //                 // console.log(grid);
    //                 return (
    //                     <>
    //                         <SubHeader {...grid} />
    //                     </>
    //                 )
    //                 break;
    //             case classNamees.LISTING:
    //                 // console.log(grid);
    //                 return (
    //                     <>
    //                         <SubHeader {...grid} />
    //                     </>
    //                 )
    //                 break;
    //             default:
    //                 // console.log(grid);
    //                 break;
    //         }

    //     } else {
    //         return null;
    //     }
    // }


    return (

        <div className="col-lg-8">

            <div className="section-header">
                <h3 className="section-title">Editor’s Pick</h3>
                <img src="/assets/images/wave.svg" className="wave" alt="wave" />
            </div>

            <div className="padding-30 rounded bordered">
                <div className="row gy-5">
                    <div className="col-sm-6">

                        <div className="post">
                            <div className="thumb rounded">
                                <a href="category.html"
                                    className="category-badge position-absolute">Lifestyle</a>
                                <span className="post-format">
                                    <i className="icon-picture"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/editor-lg.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                                <li className="list-inline-item"><a href="#"><img
                                    src="/assets/images/other/author-sm.png" className="author"
                                    alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">15 Unheard Ways To
                                Achieve Greater Walker</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire
                                soul, like these sweet mornings of spring which I enjoy</p>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/editor-sm-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make
                                    Your iPhone Faster</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/editor-sm-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy
                                    Method That Works For All</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/editor-sm-3.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To
                                    Immediately Start Selling Furniture</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/editor-sm-4.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">15 Unheard Ways To
                                    Achieve Greater Walker</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer" data-height="50"></div>


            <div className="ads-horizontal text-md-center">
                <span className="ads-title">- Sponsored Ad -</span>
                <a href="#">
                    <img src="/assets/images/ads/ad-750.png" alt="Advertisement" />
                </a>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
                <h3 className="section-title">Trending</h3>
                <img src="/assets/images/wave.svg" className="wave" alt="wave" />
            </div>

            <div className="padding-30 rounded bordered">
                <div className="row gy-5">
                    <div className="col-sm-6">

                        <div className="post">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">Culture</a>
                                <span className="post-format">
                                    <i className="icon-picture"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-lg-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                                <li className="list-inline-item"><a href="#"><img
                                    src="/assets/images/other/author-sm.png" className="author"
                                    alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Facts About Business
                                That Will Help You Success</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire
                                soul, like these sweet mornings of spring which I enjoy</p>
                        </div>

                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-sm-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make
                                    Your iPhone Faster</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-sm-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy
                                    Method That Works For All</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="post">
                            <div className="thumb rounded">
                                <a href="category.html"
                                    className="category-badge position-absolute">Inspiration</a>
                                <span className="post-format">
                                    <i className="icon-earphones"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-lg-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                                <li className="list-inline-item"><a href="#"><img
                                    src="/assets/images/other/author-sm.png" className="author"
                                    alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">5 Easy Ways You Can
                                Turn Future Into Success</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire
                                soul, like these sweet mornings of spring which I enjoy</p>
                        </div>

                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-sm-3.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">Here Are 8 Ways To
                                    Success Faster</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>

                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/trending-sm-4.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details clearfix">
                                <h6 className="post-title my-0"><a href="blog-single.html">Master The Art Of
                                    Nature With These 7 Tips</a></h6>
                                <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
                <h3 className="section-title">Inspiration</h3>
                <img src="/assets/images/wave.svg" className="wave" alt="wave" />
                <div className="slick-arrows-top">
                    <button type="button" data-role="none" className="carousel-topNav-prev slick-custom-buttons"
                        aria-label="Previous"><i className="icon-arrow-left"></i></button>
                    <button type="button" data-role="none" className="carousel-topNav-next slick-custom-buttons"
                        aria-label="Next"><i className="icon-arrow-right"></i></button>
                </div>
            </div>

            <div className="row post-carousel-twoCol post-carousel">

                <div className="post post-over-content col-md-6">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Want To Have A More Appealing
                            Tattoo?</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                                <img src="/assets/images/posts/inspiration-1.jpg" alt="thumb" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="post post-over-content col-md-6">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Feel Like A Pro With The Help Of
                            These 7 Tips</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                                <img src="/assets/images/posts/inspiration-2.jpg" alt="thumb" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="post post-over-content col-md-6">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Your Light Is About To Stop Being
                            Relevant</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                                <img src="/assets/images/posts/inspiration-3.jpg" alt="thumb" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
                <h3 className="section-title">Latest Posts</h3>
                <img src="/assets/images/wave.svg" className="wave" alt="wave" />
            </div>

            <div className="padding-30 rounded bordered">

                <div className="row">

                    <div className="col-md-12 col-sm-6">

                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                                <span className="post-format-sm">
                                    <i className="icon-picture"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/latest-sm-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details">
                                <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item"><a href="#"><img
                                        src="/assets/images/other/author-sm.png" className="author"
                                        alt="author" />Katen Doe</a></li>
                                    <li className="list-inline-item"><a href="#">Trending</a></li>
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                                <h5 className="post-title"><a href="blog-single.html">The Next 60 Things To
                                    Immediately Do About Building</a></h5>
                                <p className="excerpt mb-0">A wonderful serenity has taken possession of my
                                    entire soul, like these sweet mornings</p>
                                <div className="post-bottom clearfix d-flex align-items-center">
                                    <div className="social-share me-auto">
                                        <button className="toggle-button icon-share"></button>
                                        <ul className="icons list-unstyled list-inline mb-0">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-telegram-plane"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="far fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="more-button float-end">
                                        <a href="blog-single.html"><span className="icon-options"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-6">

                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/latest-sm-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details">
                                <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item"><a href="#"><img
                                        src="/assets/images/other/author-sm.png" className="author"
                                        alt="author" />Katen Doe</a></li>
                                    <li className="list-inline-item"><a href="#">Lifestyle</a></li>
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                                <h5 className="post-title"><a href="blog-single.html">Master The Art Of Nature
                                    With These 7 Tips</a></h5>
                                <p className="excerpt mb-0">A wonderful serenity has taken possession of my
                                    entire soul, like these sweet mornings</p>
                                <div className="post-bottom clearfix d-flex align-items-center">
                                    <div className="social-share me-auto">
                                        <button className="toggle-button icon-share"></button>
                                        <ul className="icons list-unstyled list-inline mb-0">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-telegram-plane"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="far fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="more-button float-end">
                                        <a href="blog-single.html"><span className="icon-options"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-6">

                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                                <span className="post-format-sm">
                                    <i className="icon-camrecorder"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/latest-sm-3.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details">
                                <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item"><a href="#"><img
                                        src="/assets/images/other/author-sm.png" className="author"
                                        alt="author" />Katen Doe</a></li>
                                    <li className="list-inline-item"><a href="#">Fashion</a></li>
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                                <h5 className="post-title"><a href="blog-single.html">Facts About Business That
                                    Will Help You Success</a></h5>
                                <p className="excerpt mb-0">A wonderful serenity has taken possession of my
                                    entire soul, like these sweet mornings</p>
                                <div className="post-bottom clearfix d-flex align-items-center">
                                    <div className="social-share me-auto">
                                        <button className="toggle-button icon-share"></button>
                                        <ul className="icons list-unstyled list-inline mb-0">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-telegram-plane"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="far fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="more-button float-end">
                                        <a href="blog-single.html"><span className="icon-options"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-6">

                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                                <a href="blog-single.html">
                                    <div className="inner">
                                        <img src="/assets/images/posts/latest-sm-4.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div className="details">
                                <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item"><a href="#"><img
                                        src="/assets/images/other/author-sm.png" className="author"
                                        alt="author" />Katen Doe</a></li>
                                    <li className="list-inline-item"><a href="#">Politic</a></li>
                                    <li className="list-inline-item">29 March 2021</li>
                                </ul>
                                <h5 className="post-title"><a href="blog-single.html">Your Light Is About To
                                    Stop Being Relevant</a></h5>
                                <p className="excerpt mb-0">A wonderful serenity has taken possession of my
                                    entire soul, like these sweet mornings</p>
                                <div className="post-bottom clearfix d-flex align-items-center">
                                    <div className="social-share me-auto">
                                        <button className="toggle-button icon-share"></button>
                                        <ul className="icons list-unstyled list-inline mb-0">
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-pinterest"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="fab fa-telegram-plane"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i
                                                className="far fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="more-button float-end">
                                        <a href="blog-single.html"><span className="icon-options"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <button className="btn btn-simple">Load More</button>
                </div>

            </div>

        </div>
    )
};

export default MainLeftComponent;