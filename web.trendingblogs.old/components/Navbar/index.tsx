const Navbar = () => {
    // const [open, setOpen] = useState(false);

    return (
        <header className="header-default">

            <nav className="navbar navbar-expand-lg">
                <div className="container-xl">

                    <a className="navbar-brand" href="/"><img src="/assets/images/logo.svg" alt="logo" /></a>

                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="index-2.html">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index-2.html">Magazine</a></li>
                                    <li><a className="dropdown-item" href="personal.html">Personal</a></li>
                                    <li><a className="dropdown-item" href="personal-alt.html">Personal Alt</a></li>
                                    <li><a className="dropdown-item" href="minimal.html">Minimal</a></li>
                                    <li><a className="dropdown-item" href="classNameic.html">classNameic</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">Lifestyle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">Inspiration</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="category.html">Category</a></li>
                                    <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                    <li><a className="dropdown-item" href="blog-single-alt.html">Blog Single Alt</a></li>
                                    <li><a className="dropdown-item" href="about.html">About</a></li>
                                    <li><a className="dropdown-item" href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div className="header-right">

                        <ul className="social-icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>

                        <div className="header-buttons">
                            <button className="search icon-button">
                                <i className="icon-magnifier"></i>
                            </button>
                            <button className="burger-menu icon-button">
                                <span className="burger-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;

// <div classNameName="blog_main_header">

//     <div classNameName="blog_logo">
//         <a href="/">
//             <img src="/assets/images/logo.png" classNameName="img-fluid" alt="logo" />
//         </a>
//         <div classNameName="blog_menu_toggle">
//             <span classNameName="menu_item_span">
//                 <i classNameName="fa fa-bars" aria-hidden="true"></i>
//             </span>
//         </div>
//     </div>

//     <div classNameName="blog_main_menu">
//         <div classNameName="blog_main_menu_innerdiv">
//             <ul classNameName="menu_ul">
//                 <li classNameName="menu_li active">
//                     <a href="/">Home</a>
//                 </li>

//                 <li classNameName="menu_li">
//                     <a href="/fashion">Trending
//                         <span classNameName="menu_item_span">new</span>
//                     </a>
//                 </li>
//                 <li classNameName="menu_li">
//                     <a href="/lifestyle">Lifestyle</a>
//                 </li>
//                 <li classNameName="menu_li">
//                     <a href="/health">Health
//                         <span classNameName="menu_item_span">Important</span>
//                     </a>
//                 </li>
//                 <li classNameName="menu_li">
//                     <a href="/travel">Travel</a></li>

//                 <li classNameName="menu_li">
//                     <a href="/technology">Tech</a></li>
//                 {/* <li classNameName="menu_li">
//                     <a href="/politics">
//                         Login
//                         <span classNameName="menu_item_span">Signup</span>
//                     </a>
//                 </li> */}
//             </ul>
//         </div>
//     </div>

//     <div classNameName="blog_top_search">
//         <form classNameName="form-inline">
//             <div classNameName="blog_form_group">
//                 <input type="text" classNameName="form-control" placeholder="Search Here..." />
//             </div>
//             <button type="button" classNameName="blog_header_search">
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                     width="16px" height="16px">
//                     <path fillRule="evenodd" fill="rgb(255, 54, 87)"
//                         d="M15.750,14.573 L11.807,10.612 C12.821,9.449 13.376,7.984 13.376,6.459 C13.376,2.898 10.376,-0.000 6.687,-0.000 C2.999,-0.000 -0.002,2.898 -0.002,6.459 C-0.002,10.021 2.999,12.919 6.687,12.919 C8.072,12.919 9.391,12.516 10.520,11.750 L14.493,15.741 C14.659,15.907 14.882,15.999 15.121,15.999 C15.348,15.999 15.563,15.916 15.726,15.764 C16.073,15.442 16.084,14.908 15.750,14.573 ZM6.687,1.685 C9.414,1.685 11.631,3.827 11.631,6.459 C11.631,9.092 9.414,11.234 6.687,11.234 C3.961,11.234 1.743,9.092 1.743,6.459 C1.743,3.827 3.961,1.685 6.687,1.685 Z" />
//                 </svg>
//             </button>
//         </form>
//     </div>

// </div>
{/* <button type="button" classNameName="btn btn-info">Login</button> */ }


{/* <li classNameName="menu_li"><a href="login" ></a></li> */ }
{/* <li classNameName="menu_li"><a href="sport.html">Sports <span classNameName="menu_item_span">new</span></a></li> */ }
{/* <li classNameName="menu_li"><a href="#">pages</a>
    <ul classNameName="sub-menu">
        <li classNameName="menu_li"><a href="blog_single_fullwidth.html">Blog Single FullWidth</a></li>
        <li classNameName="menu_li"><a href="blog_single_with_sidebar.html">Blog Single With Sidebar</a></li>
        <li classNameName="menu_li"><a href="contactus.html">contact</a></li>
        <li classNameName="menu_li"><a href="error.html">Error</a></li>
    </ul>
</li> */}
{/* <ul classNameName="sub-menu">
    <li classNameName="menu_li"><a href="/">Home</a></li>
    <li classNameName="menu_li"><a href="index2.html">Home Page2</a></li>
</ul> */}