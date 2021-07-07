import React from 'react'
import { NavLink } from 'react-router-dom';


class retailAndEcommerce extends React.Component {
    render() {
        return (
            <body className="solution">
                <header className="main-header capped-width has-shadow" role="none">
                    <div className="navigation">
                    <div class="logo">
                            <a href="/">
                                <img src={"assets/images/logo.png"} alt="" />
                            </a>
                        </div>
                        <nav class="header-menu">
                            <ul>
                                <li class="hs-menu-item hs-menu-depth-1">
                                
                                <p><NavLink exact to="/brands">Platform</NavLink></p>
                                    </li>
                                <li class="hs-menu-item hs-menu-depth-1 hs-item-has-children"><a href="retaill-and-ecommerce.html">Solutions</a>
                                    <ul class="hs-menu-children-wrapper">
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Food &amp; Drink</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Beauty &amp; Personal Care</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Family &amp; Children</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"> <p><NavLink exact to="/retailAndEcommerce">Retail & eComm</NavLink></p></li>
                                    </ul>
                                </li>
                                <li class="hs-menu-item hs-menu-depth-1"><p><NavLink exact to="/influencers">Creators</NavLink></p></li>
                                <li class="hs-menu-item hs-menu-depth-1"><a href="#">Case Studies</a></li>
                                <li class="hs-menu-item hs-menu-depth-1">
                                    <p><NavLink exact to="/pricing">Pricing</NavLink></p>
                                </li>
                                <li class="hs-menu-item hs-menu-depth-1">
                                    <p><NavLink exact to="/bookademo">Request a Demo</NavLink></p>
                                </li>

                            </ul>
                        </nav>
                        </div>
                    <div className="login_calltoaction"> <a href="#">Login</a> <a className="cta-button primary-cta" href="/signup">Get Started Today</a> </div>
                </header>
                <header className="mobile-header  home" role="none">
                    <div className="icon-wrapper" role="navigation">
                        <a href="/"><img src="assets/images/logo-mobile.png" width="50" style={{"width": "50px"}} alt="Logo" title="Logo"/></a>
                    </div>
                </header>
                <aside className="mobile-menu">
                    <nav className="header-menu">
                        <div className="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal">
                            <ul role="menu">
                                <li className="hs-menu-item hs-menu-depth-1"><a href="brands.html">Platform</a></li>
                                <li className="hs-menu-item hs-menu-depth-1 hs-item-has-children"><a href="retaill-and-ecommerce.html">Solutions</a>
                                    <ul className="hs-menu-children-wrapper">
                                        <li className="hs-menu-item hs-menu-depth-2"><a href="#">Food &amp; Drink</a></li>
                                        <li className="hs-menu-item hs-menu-depth-2"><a href="#">Beauty &amp; Personal Care</a></li>
                                        <li className="hs-menu-item hs-menu-depth-2"><a href="#">Family &amp; Children</a></li>
                                        <li className="hs-menu-item hs-menu-depth-2"><a href="retaill-and-ecommerce.html">Retail &amp; eComm</a></li>
                                    </ul>
                                </li>
                                <li className="hs-menu-item hs-menu-depth-1"><a href="influencers.html">Creators</a></li>
                                <li className="hs-menu-item hs-menu-depth-1"><a href="#">Case Studies</a></li>
                                <li className="hs-menu-item hs-menu-depth-1"><a href="pricing.html">Pricing</a></li>
                                <li className="hs-menu-item hs-menu-depth-1"><a href="book-a-demo.html">Request a Demo</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="footer-menu">
                        <ul role="menu">
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Marketers in Pyjamas</a></li>
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">About Us</a></li>
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Blog</a></li>
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Events &amp; Webinars</a></li>
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Contact Us</a></li>
                            <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem" target="_blank" rel="noopener">Help Center</a></li>
                        </ul>
                    </nav>
                    <div className="social-icons">
                        <a href="#" title="instagram" target="_blank">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                <g id="layer1">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="#" title="twitter" target="_blank">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <g id="layer1">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="#" title="linkedin-in" target="_blank">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                <g id="layer1">
                                    <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="#" title="facebook-f" target="_blank">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" aria-hidden="true">
                                <g id="layer1">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </aside>
                <div className="mobile-menu flexible-cta" role="navigation" aria-label="Get Started for Free">
                    <a id="" className="cta-button primary-cta" href="/signup" title="Get Started Today">Get Started Today</a>
                    <section className="login_calltoaction" role="navigation">
                        <a href="#" target="_blank">LOGIN</a>
                    </section>
                </div>
                <div className="hamburger-menu">
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                <main className="main-content ">
                    <section className="hero-solution space-top-3 space-bottom-2">
                        <div className="inner-width">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    <div className="hero-content">
                                        <h1 className="hero-title mx-auto text-center text-md-left">Source ad-worthy branded content that sells.</h1>
                                        <p className="sub-title mx-auto text-center text-md-left">And witness the power of word-of-mouth marketing at scale.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 text-center">
                                    <div className="feature-video">
                                        <script src="https://fast.wistia.com/embed/medias/z9zb28kc67.jsonp" async></script>
                                        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                        <div className="wistia_responsive_padding" style={{"padding": "100.0% 0 0 0","position": "relative"}}>
                                            <div className="wistia_responsive_wrapper" style={{"height": "100%","left": "0","position": "absolute","top": "0","width": "100%"}}>
                                                <div className="wistia_embed wistia_async_z9zb28kc67 videoFoam=true" style={{"height": "100%","position": "relative","width": "100%"}}>&nbsp;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="animated-text space-3">
                        <div className="container">
                            <div className="animated-wrap">
                                <div className="slide s1 mx-auto">
                                    <div>
                                        Say <span>goodbye</span> to <span>expensive</span> photoshoots and <span>generic</span> product shots.
                                    </div>
                                </div>
                                <div className="slide s2 mx-auto">
                                    <div>
                                        And let your <span>customers craft content </span>that...
                                    </div>
                                </div>
                                <div className="slide s3 mx-auto">
                                    <div>
                                        improves <span>conversions </span>and generates <span>sales.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="solution-stat-counter space-2">
                        <div className="container-fluid">
                            <div className="inner-width">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-6 col-lg-4 feature-img text-center d-none d-md-block">
                                        <img className="img-fluid" src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-igpost-02.png" alt="retail content on ABRAND" loading="lazy"/>
                                    </div>
                                    <div className="col-md-6 col-lg-7 offset-lg-1 stats-area a-global">
                                        <h3 className="text-center mb-0">Brands using ABRAND have:</h3>
                                        <div className="row justify-content-center">
                                            <div className="col-md-5 text-center">
                                                <div className="animated-counter">
                                                    <h5 className="text-uppercase mb-2">Launched</h5>
                                                    <div className="background-circle mx-auto" style={{"backgroundColor": "#e9f9fb"}}></div>
                                                    <div className="value animated_counter justify-content-center">
                                                        10,000
                                                    </div>
                                                    <p className="label mx-auto">
                                                        CAMPAIGNS GLOBALLY
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-md-5 text-center">
                                                <div className="animated-counter">
                                                    <h5 className="text-uppercase mb-2">Worked With</h5>
                                                    <div className="background-circle mx-auto" style={{"backgroundColor": "#edfbf4"}}></div>
                                                    <div className="value animated_counter justify-content-center">
                                                        50,000
                                                    </div>
                                                    <p className="label mx-auto">
                                                        DIVERSE INFLUENCERS WORLDWIDE
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="logo-strip py-10">
                        <div className="container-fluid">
                            <div className="logo-wrap-area d-flex align-items-center justify-content-center flex-wrap">

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-ebay.svg" alt="ebay"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-swarovski.svg" alt="swarovski"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-bigw.svg" alt="big w"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-fujifilm.svg" alt="fujifilm"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-uniqlo.svg" alt="uniqlo"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-philips.svg" alt="philips"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-ikea.svg" alt="ikea"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-woolworths.svg" alt="woolworths"/>
                                </div>

                                <div className="logo-item">
                                    <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-amazon.svg" alt="amazon"/>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="bg-gray container-fluid creator-testimonials-wrapper">
                        <div className="a-home-testimonials creator-testimonials testimonials inner-width inner-width-mobile">
                            <span id="hs_cos_wrapper_quote-icon"><img src="assets/images/Brand-Creator-TestimonialsAccent-x2.png" alt="" title=""/></span>
                            <div className="row">
                                <div id="hs_cos_wrapper_testimonial-slider">
                                    <div>
                                        <div className="testimonial-slide brand">
                                            <div className="control-image">

                                                <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png" alt="brandlogo-mars-b" width="800" height="162" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=400&amp;height=81&amp;name=brandlogo-mars-b.png 400w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png 800w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1200&amp;height=243&amp;name=brandlogo-mars-b.png 1200w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1600&amp;height=324&amp;name=brandlogo-mars-b.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2000&amp;height=405&amp;name=brandlogo-mars-b.png 2000w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2400&amp;height=486&amp;name=brandlogo-mars-b.png 2400w" sizes="(max-width: 800px) 100vw, 800px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png" alt="display-logo-mars" width="156" height="156" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=78&amp;height=78&amp;name=display-logo-mars.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=234&amp;height=234&amp;name=display-logo-mars.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=312&amp;height=312&amp;name=display-logo-mars.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=390&amp;height=390&amp;name=display-logo-mars.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=468&amp;height=468&amp;name=display-logo-mars.png 468w" sizes="(max-width: 156px) 100vw, 156px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> MARS Chocolate </span>
                                                    <span className="reviewer_detail1"> Michael Davies </span>
                                                    <span className="reviewer_detail2"> Global Media Director </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">


                                                    <img src="assets/images/home/testimonials/mars-choc.jpg" alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg" alt="seachiic" width="150" height="150" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=75&amp;height=75&amp;name=displaypic-mars.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=225&amp;height=225&amp;name=displaypic-mars.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=300&amp;height=300&amp;name=displaypic-mars.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=375&amp;height=375&amp;name=displaypic-mars.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=450&amp;height=450&amp;name=displaypic-mars.jpg 450w" sizes="(max-width: 150px) 100vw, 150px"/>


                                            @seachiic
                                            </div>
                                            <p className="testimonial">
                                                ABRAND is genius! Best advertising product I’ve seen all year!
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-slide brand">
                                            <div className="control-image">

                                                <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png" alt="swisse" width="360" height="134" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=180&amp;height=67&amp;name=swisse.png 180w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png 360w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=540&amp;height=201&amp;name=swisse.png 540w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=720&amp;height=268&amp;name=swisse.png 720w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=900&amp;height=335&amp;name=swisse.png 900w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=1080&amp;height=402&amp;name=swisse.png 1080w" sizes="(max-width: 360px) 100vw, 360px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png" alt="Swisse" width="156" height="156" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=78&amp;height=78&amp;name=displaylogo-swisse.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=234&amp;height=234&amp;name=displaylogo-swisse.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=312&amp;height=312&amp;name=displaylogo-swisse.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=390&amp;height=390&amp;name=displaylogo-swisse.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=468&amp;height=468&amp;name=displaylogo-swisse.png 468w" sizes="(max-width: 156px) 100vw, 156px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> Swisse </span>
                                                    <span className="reviewer_detail1"> Siobhan Wend </span>
                                                    <span className="reviewer_detail2"> PR Adviser </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">


                                                    <img src="assets/images/home/testimonials/swisse.jpg" alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg" alt="the.life.of.laura" width="150" height="150" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=75&amp;height=75&amp;name=displaypic-swisse.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=225&amp;height=225&amp;name=displaypic-swisse.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=300&amp;height=300&amp;name=displaypic-swisse.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=375&amp;height=375&amp;name=displaypic-swisse.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=450&amp;height=450&amp;name=displaypic-swisse.jpg 450w" sizes="(max-width: 150px) 100vw, 150px"/>


                                            @the.life.of.laura
                                            </div>
                                            <p className="testimonial">
                                                It was phenomenal to see how such a low investment in a new product was able to drive such an amazing uplift in sales.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-slide brand">
                                            <div className="control-image">

                                                <img src="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png" alt="adobe logo" width="1600" height="324" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=800&amp;height=162&amp;name=brand-logo-adobe.png 800w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=2400&amp;height=486&amp;name=brand-logo-adobe.png 2400w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=3200&amp;height=648&amp;name=brand-logo-adobe.png 3200w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4000&amp;height=810&amp;name=brand-logo-adobe.png 4000w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4800&amp;height=972&amp;name=brand-logo-adobe.png 4800w" sizes="(max-width: 1600px) 100vw, 1600px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png" alt="adobe logo" width="312" height="312" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=156&amp;height=156&amp;name=display-logo-adobe.png 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=468&amp;height=468&amp;name=display-logo-adobe.png 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=624&amp;height=624&amp;name=display-logo-adobe.png 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=780&amp;height=780&amp;name=display-logo-adobe.png 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=936&amp;height=936&amp;name=display-logo-adobe.png 936w" sizes="(max-width: 312px) 100vw, 312px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> Adobe </span>
                                                    <span className="reviewer_detail1"> David Medina </span>
                                                    <span className="reviewer_detail2"> Senior Web Producer - Adobe Photoshop Elements </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">

                                                    <img src="assets/images/home/testimonials/adobe-pic.jpg" alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg" alt="satkinsongrier" width="312" height="312" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=156&amp;height=156&amp;name=display-pic-adobe.jpg 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=468&amp;height=468&amp;name=display-pic-adobe.jpg 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=624&amp;height=624&amp;name=display-pic-adobe.jpg 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=780&amp;height=780&amp;name=display-pic-adobe.jpg 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=936&amp;height=936&amp;name=display-pic-adobe.jpg 936w" sizes="(max-width: 312px) 100vw, 312px"/>


                                            @satkinsongrier
                                            </div>
                                            <p className="testimonial">
                                                ABRAND has been truly outstanding to work with! They continue to be creative, insightful, and thorough while listening to our brand's needs and goals. ABRAND continues to evolve with the ever-changing social media landscape, while putting our product directly into the hands of our audience, and beyond
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="testimonial-slider-control"></div>
                            </div>
                        </div>
                    </section>
                    <section className="two-column-card space-bottom-1">
                        <div className="container-fluid">
                            <div className="inner-width">
                                <div className="row jusify-content-between space-top-4">

                                    <div className="col-12 col-md-6">
                                        <div className="card-area text-center p-8" style={{"backgroundColor": "rgb(233, 249, 251)", "border": "1px solid rgb(0, 192, 216)", "height": "510px"}}>
                                            <div className="card-img mx-auto">
                                                <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-influencer-sub.png" alt="influencer marketing" className="img-fluid"/>
                                            </div>
                                            <div className="content mx-auto">
                                                <h3>Increase your sales with influencer marketing</h3>
                                                <p className="card-desc">See the power of social advocacy, measure its impact and turn your most effective posts into ads that convert. </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="card-area text-center p-8" style={{"backgroundColor": "rgb(237, 251, 244)", "border": "1px solid rgb(12, 199, 112)", "height": "510px"}}>
                                            <div className="card-img mx-auto">
                                                <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-content-sub.png" alt="branded content" className="img-fluid"/>
                                            </div>
                                            <div className="content mx-auto">
                                                <h3>Don’t need the influence, but want the content?</h3>
                                                <p className="card-desc">Unlock a goldmine of instant branded content that you can license for your digital ads or Ecommerce product listings.</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-cta">
                        <div className="container-fluid">
                            <div className="inner-width">
                                <div className="cta-area row flex-column text-center justify-content-center mx-0 mx-lg-1 ">
                                    <div className="col-12 col-md-9 mx-auto">
                                        <h3 className="mb-4">Find out why some of the world’s biggest brands use ABRAND.</h3>
                                        <a href="#" className="cta-button primary-cta">REQUEST A DEMO</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="feature-image-list">
                        <div className="container-fluid space-top-2 space-bottom-1">
                            <div className="inner-width">
                                <h2 className="mx-auto">Worked with beauty influencers before?<br/>Not like this.</h2>

                                <div className="row justify-content-center align-items-center space-top-2 space-bottom-2">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="feature-img mb-4 mb-md-0">
                                            <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-contentlibrary.png" alt="content library" className="img-fluid"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="content-area-list pl-0 pl-lg-6">
                                            <ul className="mb-0">

                                                <li>
                                                    <h3>Access a library of on-brand content </h3>
                                                    <p>Quickly source user-generated content celebrating your brand; then license what you love for Ecommerce product listings </p>
                                                </li>

                                                <li>
                                                    <h3>Manage it all in one place </h3>
                                                    <p>Consider your influencer comms, sampling, payments and 1:1 feedback sorted. It’s an all-in-one solution for your brand advocates!</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center align-items-center space-top-2 space-bottom-2">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="feature-img mb-4 mb-md-0">
                                            <img src="https://www.tribegroup.co/hubfs/Website/solution%20retail/solution-retail-roi.png" alt="ABRAND metrics" className="img-fluid"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="content-area-list pl-0 pl-lg-6">
                                            <ul className="mb-0">

                                                <li>
                                                    <h3>Measure performance and increase ROI </h3>
                                                    <p>Our first-party data and performance analytics means you can identify the posts that perform and amplify them to your target audience.</p>
                                                </li>

                                                <li>
                                                    <h3>Build a loyal group of brand ambassadors </h3>
                                                    <p>Organise your fave creators into groups, invite them to private campaigns and cultivate ongoing relationships—all within the platform. </p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="section-cta">
                        <div className="container-fluid">
                            <div className="inner-width">
                                <div className="cta-area row flex-column text-center justify-content-center mx-0 mx-lg-1 ">
                                    <div className="col-12 col-md-9 mx-auto">
                                        <h3 className="mb-4">Want to know more about the platform?</h3>
                                        <a href="#" className="cta-button primary-cta">SEE HOW ABRAND WORKS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="what-are-you-waiting-for inner-width">
                        <div className="image-wrapper">
                            <span id="hs_cos_wrapper_featured-image-slider">
                                <div>
                                    <div className="hs_cos_wrapper">
                                        <div className="image-with-handle lazy-load">


                                            <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=896&amp;height=680&amp;name=BA-CTA-Image-2.png" alt="ajourneytoseven" width="896" height="680" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=448&amp;height=340&amp;name=BA-CTA-Image-2.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=896&amp;height=680&amp;name=BA-CTA-Image-2.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-2.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-2.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-2.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-2.png 2688w" sizes="(max-width: 896px) 100vw, 896px"/>
                                            <div className ="placeholder-img-cover bottom"></div>
                                            <div className ="featured-image-text">
                                            <p className ="home-featured-handle">
                                        @ajourneytoseven
                                            </p>
                                            <p className ="home-featured-text">

                                            for Popchips
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="hs_cos_wrapper">
                                        <div className="image-with-handle lazy-load">


                                            <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=896&amp;height=680&amp;name=BA-CTA-Image-1.png" alt="luxe_everyday" width="896" height="680" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=448&amp;height=340&amp;name=BA-CTA-Image-1.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=896&amp;height=680&amp;name=BA-CTA-Image-1.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-1.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-1.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-1.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-1.png 2688w" sizes="(max-width: 896px) 100vw, 896px"/>


                                            <div className ="placeholder-img-cover bottom"></div>



                                            <div className ="featured-image-text">
                                            <p className ="home-featured-handle">
                                        @luxe_everyday
                                            </p>
                                            <p className ="home-featured-text">

                                            for Knogins
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="hs_cos_wrapper">
                                        <div className="image-with-handle lazy-load">


                                            <img src="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=896&amp;height=680&amp;name=BA-CTA-Image-3.png" alt="adventures.with.mase" width="896" height="680" loading="lazy" srcSet="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=448&amp;height=340&amp;name=BA-CTA-Image-3.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=896&amp;height=680&amp;name=BA-CTA-Image-3.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-3.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-3.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-3.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-3.png 2688w" sizes="(max-width: 896px) 100vw, 896px"/>


                                            <div className ="placeholder-img-cover bottom"></div>



                                            <div className ="featured-image-text">
                                            <p className ="home-featured-handle">
                                        @adventures.with.mase
                                            </p>
                                            <p className ="home-featured-text">

                                            for Qwill App
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="a-global cta-wrapper flexible-cta parallax-box">
                            <h2 className="a-global-secondary-header mw-100 text-left">You could keep umming and aahing...</h2>
                            <p className="a-global-description">Or you could join thousands of brands like yours tapping into the power of influencer marketing.</p>
                            <div className="hs-cta-wrapper">
                                <a className="cta-button primary-cta" href="#">Request A Demo</a>
                            </div>
                        </div>
                    </section>
                    <div className="bg-bottom"></div>
                </main>
                <footer className="main-footer">
                    <div className="newsletter-wrapper">
                        <div className="inner-width-mobile inner-width">
                            <div className="newsletter-heading">Subscribe to our Newsletter for eye-catching case studies and clever campaign strategies.</div>
                            <div id="hs_cos_wrapper_newsletter">
                                <div id="hs_form_target_newsletter">
                                    <form action="">
                                        <div className="hs_option_choices">
                                            <div className="input">
                                                <ul>
                                                    <li className="hs-form-radio">
                                                        <label>
                                                            <input id="option" className="hs-input " type="radio" name="option_choices" defaultValue="influencer" defaultChecked=""/>
                                                            <span>I'm a Creator</span>
                                                        </label>
                                                    </li>
                                                    <li className="hs-form-radio">
                                                        <label>
                                                            <input id="option" className="hs-input " type="radio" name="option_choices" defaultValue="influencer" defaultChecked=""/>
                                                            <span>I'm a Brand</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hs_email">
                                            <div className="input">
                                                <input id="email" className="hs-input" type="email" name="email" required="" placeholder="Email address*" defaultValue="" autoComplete="email"/>
                                                <button>
                                                <span>SUBSCRIBE</span>
                                                <span className ="arrow-button"> <img src="assets/images/right-arrow.svg" alt="subscribe newsletter"/> </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-link-wrapper">
                        <div className="inner-width footer-link inner-width-mobile">
                            <div>
                                <nav className="footer-menu">
                                    <ul role="menu">
                                        <li><a href="#">Marketers in Pyjamas</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Events &amp; Webinars</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Help Center</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <div className="social-icons">
                                    <a href="#" title="instagram" target="_blank">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                            <g id="layer1">
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="https://twitter.com/ABRAND" title="twitter" target="_blank">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                            <g id="layer1">
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="#" title="linkedin-in" target="_blank">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                            <g id="layer1">
                                                <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="#" title="facebook-f" target="_blank">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" aria-hidden="true">
                                            <g id="layer1">
                                                <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                            </g>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-locations">
                        <div className="inner-width inner-width-mobile">
                            <div id="hs_cos_wrapper_footer-locations">
                                <div>
                                    <div className="location">
                                        <img src="assets/images/Footer-NYC-x2.png" data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">New York</span>
                                        <span className ="address-line">Floor 3, 230 Park Ave, New York City, New York 10169</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src="assets/images/Footer-LDN-x2.png" data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">London</span>
                                        <span className ="address-line">3 Waterhouse Square 138 Holborn, London EC1N 2SW</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src="assets/images/Footer-MEL-x2.png" data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">Melbourne</span>
                                        <span className ="address-line">L4/180 Albert Rd, South Melbourne, VIC 3205</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src="assets/images/Footer-SYD-x2.png" data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">Sydney</span>
                                        <span className ="address-line">L45/680 George St, Sydney, NSW 2000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content inner-width-mobile inner-width">
                        <div className="footer-copyright">
                            <div>© abrand 2021</div>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </footer>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/mobile-menu.js"></script>
                <script src="assets/slick/slick.min.js"></script>
                {/*--    <script src="https://github.hubspot.com/odometer/odometer.js"></script> --*/}
                {/*--    <script src="assets/js/animated-counter.js"></script> --*/}
                <script src="assets/js/main.js"></script>
            </body>
        )

    }

}

export default retailAndEcommerce
