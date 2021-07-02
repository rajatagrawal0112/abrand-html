import React from 'react'
import { NavLink } from 'react-router-dom';


class Index extends React.Component {
    render() {
        return (
            <body class="home">
                <header class="main-header capped-width has-shadow" role="none">
                    <div class="navigation">
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
                    <div class="login_calltoaction"> <a href="#">Login</a> <a class="cta-button primary-cta" href="#">Get Started Today</a> </div>
                </header>
                <header class="mobile-header  home" role="none">
                    <div class="icon-wrapper" role="navigation">
                        <a href="/"><img src={"assets/images/logo-mobile.png"} width="50" style={{ 'width': '50px' }} alt="Logo" title="Logo" /></a>
                    </div>
                </header>
                <aside class="mobile-menu">
                    <nav class="header-menu">
                        <div class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal">
                            <ul role="menu">
                                <li class="hs-menu-item hs-menu-depth-1"><a href="brands.html">Platform</a></li>
                                <li class="hs-menu-item hs-menu-depth-1 hs-item-has-children"><a href="retaill-and-ecommerce.html">Solutions</a>
                                    <ul class="hs-menu-children-wrapper">
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Food &amp; Drink</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Beauty &amp; Personal Care</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="#">Family &amp; Children</a></li>
                                        <li class="hs-menu-item hs-menu-depth-2"><a href="retaill-and-ecommerce.html">Retail &amp; eComm</a></li>
                                    </ul>
                                </li>
                                <li class="hs-menu-item hs-menu-depth-1"><a href="influencers.html">Creators</a></li>
                                <li class="hs-menu-item hs-menu-depth-1"><a href="#">Case Studies</a></li>
                                <li class="hs-menu-item hs-menu-depth-1"><a href="pricing.html">Pricing</a></li>
                                <li class="hs-menu-item hs-menu-depth-1"><a href="book-a-demo.html">Request a Demo</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="footer-menu">
                        <ul role="menu">
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Marketers in Pyjamas</a></li>
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">About Us</a></li>
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Blog</a></li>
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Events &amp; Webinars</a></li>
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem">Contact Us</a></li>
                            <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="#" role="menuitem" target="_blank" rel="noopener">Help Center</a></li>
                        </ul>
                    </nav>
                    <div class="social-icons">
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
                <div class="mobile-menu flexible-cta" role="navigation" aria-label="Get Started for Free">
                    <a id="" class="cta-button primary-cta" href="#" title="Get Started Today">Get Started Today</a>
                    <section class="login_calltoaction" role="navigation">
                        <a href="#" target="_blank">LOGIN</a>
                    </section>
                </div>
                <div class="hamburger-menu">
                    <div class="hamburger">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>
                <main class="main-content ">
                    <section class="banner-section container-fluid">
                        <div class="a-global row p-0 align-items-stretch flex-column-reverse flex-lg-row">
                            <div class="col-12 col-lg-6 p-0">
                                <div class="home-content pb-5 pb-lg-0">
                                    <h1 class="a-global-header-title d-inline-block">Instant Branded Content</h1>
                                    <p class="a-global-description text-center banner-description mb-5 mb-lg-3">Real customers celebrating the products they love through branded content that performs.</p>
                                    <div class="home-content__details col-8 col-sm-4 col-lg-auto">
                                        <div class="row home-content-details-ctas flex-column flex-lg-row">
                                            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                                                <div class="home-cta">
                                                    <label class="global-label mb-3"></label>
                                                    <a class="cta-button cta-primary" href="#">I'm a brand</a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="home-cta">
                                                    <label class="global-label mb-3"></label>
                                                    <a class="cta-button cta-secondary" href="#">I'm a brand</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row home-fb-partner justify-content-center flex-column align-items-center mb-lg-4 col-12">
                                            <label class="global-label mb-3"></label>
                                            <div class="row justify-content-end">
                                                <a class="home-fb-partner-label" href="#"><img src={"assets/images/home-fmp-badge-light.png"} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-featured-img home-featured-image-wrapper col-12 col-lg-6 p-0">
                                <div class="hs_cos_wrapper hs_cos_wrapper_widget_container hs_cos_wrapper_type_widget_container" id="hs_cos_wrapper_featured-image-slider">
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-1.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-2.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-3.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-4.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-5.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-6.jpg"} alt="" /></div>
                                    <div class="image-with-handle lazy-load"><img src={"assets/images/home/slider/banner-7.jpg"} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-gray container-fluid home-results pb-0">
                        <div class="a-global inner-width">
                            <ul class="home-brands-logo p-0 row">
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-1.png"} alt="" /></li>
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-2.png"} alt="" /></li>
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-3.png"} alt="" /></li>
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-4.png"} alt="" /></li>
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-5.png"} alt="" /></li>
                                <li class="col-4 col-md-2 p-0 m-lg-0"><img src={"assets/images/home/home-logo-6.png"} alt="" /></li>
                            </ul>
                        </div>
                        <div class="a-global home-benefits row inner-width">
                            <div class="benefits col-12 col-xl-5 p-0 text-center text-xl-left">
                                <h2 class="a-global-secondary-header col-12 text-center text-xl-left">ABRAND’s powerful platform helps you…</h2>
                            </div>
                            <div class="col-12 col-xl-7 p-0">
                                <div class="hs-cos-wrapper-benefits-cards">
                                    <div class="col-lg-6">
                                        <div class="info-card">

                                            <img src={"assets/images/home/home-fast.svg"} alt="go to market asap" width="500" height="500" />

                                            <div class="card-title">Go to market ASAP</div>
                                            <div class="card-caption">Sign up and source quality branded content from influencers instantly</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="info-card">

                                            <img src={"assets/images/home/home-measure.svg"} alt="Maximise ROI" width="500" height="500" />

                                            <div class="card-title">Maximise ROI</div>
                                            <div class="card-caption">Measure success with predictive and post-campaign performance analytics</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="info-card">

                                            <img src={"assets/images/home/home-money.svg"} alt="home-money" width="500" height="500" />

                                            <div class="card-title">Save money</div>
                                            <div class="card-caption">Beautiful instant branded content has never been more cost-effective</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="info-card">

                                            <img src={"assets/images/home/home-action.svg"} alt="home-action" width="500" height="500" />

                                            <div class="card-title">Drive action</div>
                                            <div class="card-caption">With high performing content sourced quickly and cost effectively</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white container-fluid">
                        <div class="a-home">
                            <div class="inner-width">
                                <div class="home-animated-counters animated-counters row">
                                    <div>
                                        <section class="animated-counter">
                                            <div class="background-circle" style={{ backgroundColor: "#ffeefa" }}></div>
                                            <div class="value animated_counter">
                                                <span class="counter-a" data-value="10,000" data-long-suffix>
                                                    10,000+
                                                </span>
                                            </div>
                                            <p class="label">
                                                CAMPAIGNS SET LIVE
                                            </p>
                                        </section>
                                    </div>
                                    <div>
                                        <section class="animated-counter">
                                            <div class="background-circle" style={{ backgroundColor: "#E9F9FB" }}></div>
                                            <div class="value animated_counter">
                                                <span class="counter-a" data-value="50,000" data-long-suffix>
                                                    50,000+
                                                </span>
                                            </div>
                                            <p class="label">
                                                TALENTED AND DIVERSE CREATORS
                                            </p>
                                        </section>
                                    </div>
                                    <div>
                                        <section class="animated-counter">
                                            <div class="background-circle" style={{ backgroundColor: "#EDFBF4" }}></div>
                                            <div class="value animated_counter">
                                                <span class="counter-a" data-value="1,000,000" data-long-suffix>
                                                    1,000,000+
                                                </span>
                                            </div>
                                            <p class="label">
                                                PIECES OF BRANDED CONTENT GENERATED
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inner-width">
                            <div class="a-global col-lg-11 m-lg-auto p-0">
                                <div class="home-copy">
                                    <h2 class="a-global-secondary-header">
                                        Real customers. Real creativity. Real results.
                                    </h2>
                                    <p class="a-global-description col-12 col-md-5 p-0 m-auto text-center">
                                        Tap into the power of your creative customers for branded content and authentic word-of-mouth influencer marketing.
                                    </p>
                                </div>
                                <div class="a-home-brand-influencer-content">
                                    <div class="a-home-brand-content a-global">
                                        <div class="two-column left">
                                            <div class="col col-img col-12 col-lg-6">
                                                <img class="lazy-load" src={"assets/images/home/home-ibc-a.webp"} alt="ABRAND instant branded content " loading="lazy" />
                                            </div>
                                            <div class="col col-details col-12 col-lg-6">
                                                <div class="tags">INSTANT BRANDED CONTENT
                                                </div>
                                                <div class="description">
                                                    <h3>Unlock high-quality, creative content</h3>
                                                    <p>Partner with ABRAND's influencer network for fast and beautiful branded content to use in your social media ads, digital ads and Ecommerce sites. Witness the impact of effective branded content sourced at speed and scale.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="a-home-influencer-content a-global">
                                    <div class="two-column ">
                                        <div class="col col-img col-12 col-lg-6">
                                            <img class="lazy-load" src={"assets/images/home/home-im-a-1.webp"} alt="ABRAND influencer marketing" loading="lazy" />
                                        </div>
                                        <div class="col col-details col-12 col-lg-6">
                                            <div class="tags">INFLUENCER MARKETING
                                            </div>
                                            <div class="description">
                                                <h3>Unleash the power of social media</h3>
                                                <p>Approve the posts you love and amplify your branded content via our creators’ social media channels. They'll post it to their followers to showcase the power of authentic brand advocacy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="inner-width">
                                <div class="a-global a-home-request-demo row align-items-center d-flex flex-column flex-lg-row">
                                    <h3 class="col-12 col-xl-8 m-0 p-0 text-center text-xl-left">
                                        How can ABRAND elevate your digital content and influencer marketing strategy?
                                    </h3>
                                    <div class="col-12 col-xl-4 m-0 p-0 text-center text-xl-right">
                                        <a class="cta-button primary-cta" href="#">Request A Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-gray container-fluid creator-testimonials-wrapper">
                        <div class="a-home-testimonials creator-testimonials testimonials inner-width inner-width-mobile">
                            <span id="hs_cos_wrapper_quote-icon"><img src={"assets/images/Brand-Creator-TestimonialsAccent-x2.png"} alt="" title="" /></span>
                            <div class="row">
                                <div id="hs_cos_wrapper_testimonial-slider">
                                    <div>
                                        <div class="testimonial-slide brand">
                                            <div class="control-image">

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png"} alt="brandlogo-mars-b" width="800" height="162" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=400&amp;height=81&amp;name=brandlogo-mars-b.png 400w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png 800w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1200&amp;height=243&amp;name=brandlogo-mars-b.png 1200w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1600&amp;height=324&amp;name=brandlogo-mars-b.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2000&amp;height=405&amp;name=brandlogo-mars-b.png 2000w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2400&amp;height=486&amp;name=brandlogo-mars-b.png 2400w" sizes="(max-width: 800px) 100vw, 800px" />
                                            </div>
                                            <div class="reviewer">
                                                <div class="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png"} alt="display-logo-mars" width="156" height="156" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=78&amp;height=78&amp;name=display-logo-mars.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=234&amp;height=234&amp;name=display-logo-mars.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=312&amp;height=312&amp;name=display-logo-mars.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=390&amp;height=390&amp;name=display-logo-mars.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=468&amp;height=468&amp;name=display-logo-mars.png 468w" sizes="(max-width: 156px) 100vw, 156px" />

                                                </div>
                                                <div class="reviewer-info">
                                                    <span class="reviewer_name"> MARS Chocolate </span>
                                                    <span class="reviewer_detail1"> Michael Davies </span>
                                                    <span class="reviewer_detail2"> Global Media Director </span>
                                                </div>
                                            </div>
                                            <div class="featured-image-wrapper">
                                                <div class="featured-image">


                                                    <img src={"assets/images/home/testimonials/mars-choc.jpg"} alt="" />

                                                </div>



                                                <img class="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg"} alt="seachiic" width="150" height="150" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=75&amp;height=75&amp;name=displaypic-mars.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=225&amp;height=225&amp;name=displaypic-mars.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=300&amp;height=300&amp;name=displaypic-mars.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=375&amp;height=375&amp;name=displaypic-mars.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=450&amp;height=450&amp;name=displaypic-mars.jpg 450w" sizes="(max-width: 150px) 100vw, 150px" />


                                                @seachiic
                                            </div>
                                            <p class="testimonial">
                                                ABRAND is genius! Best advertising product I’ve seen all year!
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="testimonial-slide brand">
                                            <div class="control-image">

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png"} alt="swisse" width="360" height="134" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=180&amp;height=67&amp;name=swisse.png 180w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png 360w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=540&amp;height=201&amp;name=swisse.png 540w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=720&amp;height=268&amp;name=swisse.png 720w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=900&amp;height=335&amp;name=swisse.png 900w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=1080&amp;height=402&amp;name=swisse.png 1080w" sizes="(max-width: 360px) 100vw, 360px" />
                                            </div>
                                            <div class="reviewer">
                                                <div class="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png"} alt="Swisse" width="156" height="156" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=78&amp;height=78&amp;name=displaylogo-swisse.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=234&amp;height=234&amp;name=displaylogo-swisse.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=312&amp;height=312&amp;name=displaylogo-swisse.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=390&amp;height=390&amp;name=displaylogo-swisse.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=468&amp;height=468&amp;name=displaylogo-swisse.png 468w" sizes="(max-width: 156px) 100vw, 156px" />

                                                </div>
                                                <div class="reviewer-info">
                                                    <span class="reviewer_name"> Swisse </span>
                                                    <span class="reviewer_detail1"> Siobhan Wend </span>
                                                    <span class="reviewer_detail2"> PR Adviser </span>
                                                </div>
                                            </div>
                                            <div class="featured-image-wrapper">
                                                <div class="featured-image">


                                                    <img src={"assets/images/home/testimonials/swisse.jpg"} alt="" />

                                                </div>



                                                <img class="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg"} alt="the.life.of.laura" width="150" height="150" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=75&amp;height=75&amp;name=displaypic-swisse.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=225&amp;height=225&amp;name=displaypic-swisse.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=300&amp;height=300&amp;name=displaypic-swisse.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=375&amp;height=375&amp;name=displaypic-swisse.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=450&amp;height=450&amp;name=displaypic-swisse.jpg 450w" sizes="(max-width: 150px) 100vw, 150px" />


                                                @the.life.of.laura
                                            </div>
                                            <p class="testimonial">
                                                It was phenomenal to see how such a low investment in a new product was able to drive such an amazing uplift in sales.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="testimonial-slide brand">
                                            <div class="control-image">

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png"} alt="adobe logo" width="1600" height="324" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=800&amp;height=162&amp;name=brand-logo-adobe.png 800w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=2400&amp;height=486&amp;name=brand-logo-adobe.png 2400w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=3200&amp;height=648&amp;name=brand-logo-adobe.png 3200w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4000&amp;height=810&amp;name=brand-logo-adobe.png 4000w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4800&amp;height=972&amp;name=brand-logo-adobe.png 4800w" sizes="(max-width: 1600px) 100vw, 1600px" />
                                            </div>
                                            <div class="reviewer">
                                                <div class="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png"} alt="adobe logo" width="312" height="312" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=156&amp;height=156&amp;name=display-logo-adobe.png 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=468&amp;height=468&amp;name=display-logo-adobe.png 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=624&amp;height=624&amp;name=display-logo-adobe.png 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=780&amp;height=780&amp;name=display-logo-adobe.png 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=936&amp;height=936&amp;name=display-logo-adobe.png 936w" sizes="(max-width: 312px) 100vw, 312px" />

                                                </div>
                                                <div class="reviewer-info">
                                                    <span class="reviewer_name"> Adobe </span>
                                                    <span class="reviewer_detail1"> David Medina </span>
                                                    <span class="reviewer_detail2"> Senior Web Producer - Adobe Photoshop Elements </span>
                                                </div>
                                            </div>
                                            <div class="featured-image-wrapper">
                                                <div class="featured-image">

                                                    <img src={"assets/images/home/testimonials/adobe-pic.jpg"} alt="" />

                                                </div>



                                                <img class="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg"} alt="satkinsongrier" width="312" height="312" loading="lazy" srcset="https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=156&amp;height=156&amp;name=display-pic-adobe.jpg 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=468&amp;height=468&amp;name=display-pic-adobe.jpg 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=624&amp;height=624&amp;name=display-pic-adobe.jpg 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=780&amp;height=780&amp;name=display-pic-adobe.jpg 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=936&amp;height=936&amp;name=display-pic-adobe.jpg 936w" sizes="(max-width: 312px) 100vw, 312px" />


                                                @satkinsongrier
                                            </div>
                                            <p class="testimonial">
                                                ABRAND has been truly outstanding to work with! They continue to be creative, insightful, and thorough while listening to our brand's needs and goals. ABRAND continues to evolve with the ever-changing social media landscape, while putting our product directly into the hands of our audience, and beyond
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="testimonial-slider-control"></div>
                            </div>
                        </div>
                    </section>
                    <section class="container-fluid">
                        <div class="inner-width a-global a-home-brand-list">
                            <h3 class="text-center">
                                Unlocking the world’s creativity
                            </h3>
                            <p class="a-global-description col-12 text-center mb-5">
                                with over 6,000 of the world's leading brands
                            </p>
                            <div class="case-cards-wrapper mb-0">
                                <div class="card-extra-row">
                                    <div>
                                        <a href="#" data-cs-modal="" class="case-card fade-in-image">
                                            <div class="case-card-image">
                                                <img class="lozad loaded" src={"assets/images/home/world-creativity/tic-tac.jpg"} data-loaded="true" />
                                            </div>
                                            <div class="brand-image">
                                                <img class="lozad loaded" data-src={"https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/tictac.png"} alt="Tic Tac" width="90" src="https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/tictac.png" data-loaded="true" />
                                                <div class="text-content">
                                                    <span class="name">Gum</span>
                                                    <span class="type">Influencer marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" data-cs-modal="" class="case-card fade-in-image">
                                            <div class="case-card-image">
                                                <img class="lozad loaded" src={"assets/images/home/world-creativity/senmiguel.jpg"} data-loaded="true" />
                                            </div>
                                            <div class="brand-image">
                                                <img class="lozad loaded" data-src={"https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/sanmiguel.png"} alt="San Miguel" width="90" src="https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/sanmiguel.png" data-loaded="true" />
                                                <div class="text-content">
                                                    <span class="name">Travel</span>
                                                    <span class="type">Influencer marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div><a href="#" data-cs-modal="" class="case-card fade-in-image">
                                        <div class="case-card-image">
                                            <img class="lozad loaded" src={"assets/images/home/world-creativity/caduile.jpg"} data-loaded="true" />
                                        </div>
                                        <div class="brand-image">
                                            <img class="lozad loaded" data-src={"https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/caudalie.png"} alt="Caudalie" width="90" src={"https://www.tribegroup.co/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/caudalie.png"} data-loaded="true" />
                                            <div class="text-content">
                                                <span class="name">Vinosource - Natural Hydration</span>
                                                <span class="type">Influencer marketing</span>
                                            </div>
                                        </div>
                                    </a></div>
                                    <div><a class="view-more-link" href="#">
                                        <div class="text">Get inspired</div>
                                        <div class="arrow">
                                            <img src={"assets/images/right-arrow.svg"} alt="view case studies" />
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-orange container-fluid">
                        <div class="inner-width">
                            <div class="a-global a-home-create-content create-content">
                                <div class="two-column left">
                                    <div class="col col-img col-12 col-lg-6">
                                        <img class="lazy-load" src={"assets/images/home-creators.png"} alt="become a ABRAND creator" loading="lazy" />
                                    </div>
                                    <div class="col col-details col-12 col-lg-6">
                                        <div class="tags">ARE YOU A CREATOR?</div>
                                        <div class="description">
                                            <h3>Create content. Have fun. Get paid.</h3>
                                            <p>Download the app and start earning today.</p>
                                            <div class="row col-12 mt-5">
                                                <div class="col-6 pl-0">
                                                    <a class="cta_button" href="#">
                                                        <img class="hs-cta-img" alt="Download on the App Store" src={"assets/images/home/ios-btn.webp"} />
                                                    </a>
                                                </div>
                                                <div class="col-6 pr-0">
                                                    <a class="cta_button" href="#">
                                                        <img class="hs-cta-img" alt="Download for Google Play" src={"assets/images/home/google-play-btn.webp"} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer class="main-footer">
                    <div class="newsletter-wrapper">
                        <div class="inner-width-mobile inner-width">
                            <div class="newsletter-heading">Subscribe to our Newsletter for eye-catching case studies and clever campaign strategies.</div>
                            <div id="hs_cos_wrapper_newsletter">
                                <div id="hs_form_target_newsletter">
                                    <form action="">
                                        <div class="hs_option_choices">
                                            <div class="input">
                                                <ul>
                                                    <li class="hs-form-radio">
                                                        <label>
                                                            <input id="option" class="hs-input " type="radio" name="option_choices" value="influencer" checked="" />
                                                            <span>I'm a Creator</span>
                                                        </label>
                                                    </li>
                                                    <li class="hs-form-radio">
                                                        <label>
                                                            <input id="option" class="hs-input " type="radio" name="option_choices" value="influencer" checked="" />
                                                            <span>I'm a Brand</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hs_email">
                                            <div class="input">
                                                <input id="email" class="hs-input" type="email" name="email" required="" placeholder="Email address*" value="" autocomplete="email" />
                                                <button>
                                                    <span>SUBSCRIBE</span>
                                                    <span class="arrow-button"> <img src={"assets/images/right-arrow.svg"} alt="subscribe newsletter" /> </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-link-wrapper">
                        <div class="inner-width footer-link inner-width-mobile">
                            <div>
                                <nav class="footer-menu">
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
                                <div class="social-icons">
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

                    <div class="footer-locations">
                        <div class="inner-width inner-width-mobile">
                            <div id="hs_cos_wrapper_footer-locations">
                                <div>
                                    <div class="location">
                                        <img src={"assets/images/Footer-NYC-x2.png"} data-loaded="true" />
                                        <div class="location-address">
                                            <span class="name">New York</span>
                                            <span class="address-line">Floor 3, 230 Park Ave, New York City, New York 10169</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="location">
                                        <img src={"assets/images/Footer-LDN-x2.png"} data-loaded="true" />
                                        <div class="location-address">
                                            <span class="name">London</span>
                                            <span class="address-line">3 Waterhouse Square 138 Holborn, London EC1N 2SW</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="location">
                                        <img src={"assets/images/Footer-MEL-x2.png"} data-loaded="true" />
                                        <div class="location-address">
                                            <span class="name">Melbourne</span>
                                            <span class="address-line">L4/180 Albert Rd, South Melbourne, VIC 3205</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="location">
                                        <img src={"assets/images/Footer-SYD-x2.png"} data-loaded="true" />
                                        <div class="location-address">
                                            <span class="name">Sydney</span>
                                            <span class="address-line">L45/680 George St, Sydney, NSW 2000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content inner-width-mobile inner-width">
                        <div class="footer-copyright">
                            <div>© abrand 2021</div>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Index;