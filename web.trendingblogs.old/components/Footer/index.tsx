const Footer = () => {
    return (
        <footer>
            <div className="container-xl">
                <div className="footer-inner">
                    <div className="row d-flex align-items-center gy-4">

                        <div className="col-md-4">
                            <span className="copyright">© 2021 Katen. Template by ThemeGer.</span>
                        </div>

                        <div className="col-md-4 text-center">
                            <ul className="social-icons list-unstyled list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <a href="#" id="return-to-top" className="float-md-end"><i className="icon-arrow-up"></i>Back to
                                Top</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

{/* 
        <section>
            <div classNameName="blog_footer blog_toppadder60 blog_bottompadder30">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div classNameName="blog_footer_div">
                                <div classNameName="widget weidget_aboutus">
                                    <img src="/assets/images/logo_footer.png" classNameName="img-fluid" alt="" />
                                    <p>Lorem ipsum dolor sit etonsecti ietur adipisicing elit, sed do eiusmoempior incididunt ut labore et dolore aigneia aliqua Ut enim ad minim Lorem ipseum dolor sit ametonsectietur.</p>
                                    <a href="#" classNameName="blog_readmore">read more <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="6px"><path fillRule="evenodd" fill="rgb(255, 54, 87)" d="M12.924,2.786 L10.035,0.042 C9.955,-0.026 9.867,-0.039 9.772,0.003 C9.677,0.045 9.629,0.120 9.629,0.230 L9.629,1.986 L0.242,1.986 C0.172,1.986 0.114,2.010 0.069,2.057 C0.024,2.104 0.001,2.164 0.001,2.237 L0.001,3.743 C0.001,3.816 0.024,3.876 0.069,3.923 C0.114,3.970 0.172,3.994 0.242,3.994 L9.629,3.994 L9.629,5.750 C9.629,5.854 9.677,5.930 9.772,5.977 C9.867,6.019 9.955,6.003 10.035,5.930 L12.924,3.154 C12.974,3.102 12.999,3.039 12.999,2.966 C12.999,2.899 12.974,2.839 12.924,2.786 Z"></path></svg></a>
                                    <div classNameName="blog_followus_div">
                                        <ul>
                                            <li>Follow Us -</li>
                                            <li><a href="#"><i classNameName="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i classNameName="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i classNameName="fa fa-youtube-play"></i></a></li>
                                            <li><a href="#"><i classNameName="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i classNameName="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div classNameName="blog_footer_div">
                                <div classNameName="widget widget_recent_post">
                                    <h3 classNameName="widget-title">Recent News</h3>
                                    <ul>
                                        <li>
                                            <div classNameName="blog_recent_post">
                                                <div classNameName="blog_recent_post_img">
                                                    <img src="https://via.placeholder.com/50x50" classNameName="img-fluid" alt="" />
                                                </div>
                                                <div classNameName="blog_recent_post_content">
                                                    <h4><a href="blog_single_with_sidebar.html">Does US Tax Overhaul Violate Global Trade.</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div classNameName="blog_recent_post">
                                                <div classNameName="blog_recent_post_img">
                                                    <img src="https://via.placeholder.com/50x50" classNameName="img-fluid" alt="" />
                                                </div>
                                                <div classNameName="blog_recent_post_content">
                                                    <h4><a href="blog_single_with_sidebar.html">What should you take in your bag before going.</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div classNameName="blog_recent_post">
                                                <div classNameName="blog_recent_post_img">
                                                    <img src="https://via.placeholder.com/50x50" classNameName="img-fluid" alt="" />
                                                </div>
                                                <div classNameName="blog_recent_post_content">
                                                    <h4><a href="blog_single_with_sidebar.html">Take in your bag before going to hiking</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div classNameName="blog_footer_div">
                                <div classNameName="widget widget_recent_news">
                                    <h3 classNameName="widget-title">Popular Post</h3>
                                    <ul>
                                        <li>
                                            <div classNameName="blog_news">
                                                <div classNameName="blog_news_title">
                                                    <h4><a href="blog_single_with_sidebar.html">LA Marathon is long distance running from the stadium.</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div classNameName="blog_news">
                                                <div classNameName="blog_news_title">
                                                    <h4><a href="blog_single_with_sidebar.html">LA Marathon is long distance running from the stadium.</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div classNameName="blog_news">
                                                <div classNameName="blog_news_title">
                                                    <h4><a href="blog_single_with_sidebar.html">LA Marathon is long distance running from the stadium.</a></h4>
                                                    <p>Sep 21,2018 <a href="#">- Sports</a></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div classNameName="blog_footer_div">
                                <div classNameName="widget widget_newsletter">
                                    <h3 classNameName="widget-title">Subscribe</h3>
                                    <div classNameName="blog_newsletter">
                                        <p>Enter Your Email To Get Notified About Our New  Solutions.</p>
                                        <form classNameName="form-inline">
                                            <div classNameName="blog_form_group">
                                                <input type="text" classNameName="form-control" placeholder=" Email Here..." />
                                            </div>
                                            <button type="button" classNameName="blog_newsletter_btn"><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16px"><path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M16.914,0.038 C16.838,-0.030 16.731,-0.046 16.639,-0.002 L0.147,7.802 C0.058,7.844 0.001,7.934 0.000,8.034 C-0.001,8.134 0.054,8.225 0.142,8.269 L4.810,10.602 C4.895,10.645 4.997,10.635 5.074,10.577 L9.611,7.123 L6.049,10.855 C5.998,10.908 5.972,10.981 5.978,11.055 L6.333,15.760 C6.340,15.864 6.409,15.953 6.507,15.986 C6.533,15.994 6.560,15.999 6.586,15.999 C6.659,15.999 6.729,15.967 6.778,15.909 L9.256,12.986 L12.318,14.476 C12.384,14.508 12.461,14.509 12.529,14.480 C12.597,14.449 12.648,14.391 12.670,14.320 L16.989,0.310 C17.019,0.212 16.990,0.105 16.914,0.038 Z" /></svg></button>
                                        </form>
                                    </div>
                                    <p>512 Margoa Center Raod, Los Angeles, California,wh1200-124<a href="#">wlog@example.com</a> 1800-145-1547</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classNameName="blog_copyright_wrapper">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-lg-6 col-md-6 col-sm-12 col-12">
                            <p>Copyright &copy; 2018 <a href="index.html">Wlog</a>. All Right Reserved.</p>
                        </div>
                        <div classNameName="col-lg-6 col-md-6 col-sm-12 col-12">
                            <ul classNameName="blog_footer_menu">
                                <li><a href="about.html">About</a></li>
                                <li><a href="contactus.html">Contact</a></li>
                                <li><a href="terms_condition.html">Terms Of Services</a></li>
                                <li><a href="privacy_policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <div classNameNameName="bg-gray-800 p-10 text-gray-200">
    //     <div classNameNameName="max-w-7xl mx-auto">
    //         <div classNameNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
    //             <div classNameNameName="mb-5">
    //                 <h4 classNameNameName="text-2xl pb-4">Company</h4>
    //                 <p classNameNameName="text-gray-500">
    //                     Khagati para <br />
    //                     Trishal, Mymensingh, 2220 <br />
    //                     Bangladesh<br />
    //                     <strong>Phone: </strong>+88 01915 977 694 <br />
    //                     <strong>Email: </strong>asmdhabibullah96@gmail.com <br />
    //                 </p>
    //             </div>
    //             <div classNameNameName="mb-5">
    //                 <h4 classNameNameName="pb-4">Company</h4>
    //                 <ul classNameNameName="text-gray-500">
    //                     {
    //                         COMPANY.map(({ name, link }, key) => <ShowItems key={key} name={name} link={link} />)
    //                     }
    //                 </ul>
    //             </div>
    //             <div classNameNameName="mb-5">
    //                 <h4 classNameNameName="pb-4">Support</h4>
    //                 <ul classNameNameName="text-gray-500">
    //                     {
    //                         SUPPORT.map(({ name, link }, key) => <ShowItems key={key} name={name} link={link} />)
    //                     }
    //                 </ul>
    //             </div>

    //             <div classNameNameName="mb-5">
    //                 <h4 classNameNameName="pb-4">Join Our Newsletter</h4>
    //                 <p classNameNameName="text-gray-400 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //                 <form classNameNameName="flex flex-row flex-wrape" action="" >
    //                     <input classNameNameName="text-gray-400 w-2/3 p-2" type="text" name="" id="" />
    //                     <button classNameNameName="p-2 w-1/3 bg-sky-600 text-white" type="submit">Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //         <div classNameNameName="w-full bg-gray-900 text-gray-400 px-10">
    //             <div classNameNameName="mx-w-7 flex flex-col sm:flex-row py-4 mx-auto justify-between items-center ">
    //                 <div classNameNameName="text-left">
    //                     <div classNameNameName="devs-team">
    //                         Devs Team:{" "}
    //                         <a href="#" target="_blank" rel="noopener noreferrer" classNameNameName="text-sky-600">
    //                             @TrandingBlogs
    //                         </a>
    //                     </div>
    //                     <div classNameNameName="copyright">
    //                         @&rbrace;{new Date().getFullYear()} -  All Rights Reserved <strong>TrandingBlogs</strong>
    //                     </div>
    //                 </div>

    //                 <div classNameNameName="text-center text-lx text-white mb-2">
    //                     {Icons.map(({ icon, link }, key) => (
    //                         <SocialIcon key={key} icon={icon} link={link} />
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
     </div> */}