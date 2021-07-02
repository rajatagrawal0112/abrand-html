import React from 'react'
import { NavLink } from 'react-router-dom';


class brands extends React.Component {
    render() {
        return (
            <body className="platform">
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
                    <div className="login_calltoaction"> <a href="#">Login</a> <a className="cta-button primary-cta" href="#">Get Started Today</a> </div>
                </header>
                <header className="mobile-header  home" role="none">
                    <div className="icon-wrapper" role="navigation">
                        <a href="/"><img src={"assets/images/logo-mobile.png"} width="50" style={{"width": "50px"}} alt="Logo" title="Logo" /></a>
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
                    <a id="" className="cta-button primary-cta" href="#" title="Get Started Today">Get Started Today</a>
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
                    <section className="banner-content container-fluid">
                        <div className="s-global inner-width row justify-content-center">
                            <h1 className="d-inline-block col-12 col-lg-8 text-center mw-100">
                                Increase Efficiency with ABRAND’s Powerful Software
                            </h1>
                            <p className="a-global-paragraph text-center m-auto">
                                Annual subscriptions built for teams of all sizes
                            </p>
                            <div className="col-12 m-0 p-0 text-center">
                            </div>
                        </div>
                    </section>
                    <section className="banner-imageGallery">
                        <div className="inner-width">
                            <ul className="d-none d-lg-block">
                                <li className="rellax" data-rellax-speed="1"><img src={"https://www.tribegroup.co/hubfs/Website/placeholder/platform-hero-1.png"} className="hs-image-widget " style={{ "border-width": "0px", "border": "0px;" }} alt="" title="" /></li>
                                <li className="rellax" data-rellax-speed="2"><img src={"https://www.tribegroup.co/hubfs/Website/placeholder/platform-hero-2.png"} className="hs-image-widget " style={{ "border-width": "0px", "border": "0px;" }} alt="" title="" /></li>
                                <li className="rellax" data-rellax-speed="3"><img src={"https://www.tribegroup.co/hubfs/Website/placeholder/platform-hero-3.png"} className="hs-image-widget " style={{ "border-width": "0px", "border": "0px;" }} alt="" title="" /></li>
                                <li className="rellax" data-rellax-speed="2"><img src={"https://www.tribegroup.co/hubfs/Website/placeholder/platform-hero-4.png"} className="hs-image-widget " style={{ "border-width": "0px", "border": "0px;" }} alt="" title="" /></li>
                            </ul>
                        </div>
                    </section>

                    <section className="how-ABRAND-works container-fluid">
                        <div className="s-global inner-width d-flex align-items-center">
                            <div className="accordion-tab-content col-12 col-lg-6 d-none d-lg-block p-0">
                                <div className="accordion-tab-pane show active" role="tabpanel" aria-labelledby="headingOne">
                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-01-create.png"} className="hs-image-widget" />
                                </div>
                                <div className="accordion-tab-pane" role="tabpanel" aria-labelledby="headingTwo">
                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-02-Content.png?width=1164&amp;name=platform-htw-02-Content.png"} className="hs-image-widget " />
                                </div>
                                <div className="accordion-tab-pane" role="tabpanel" aria-labelledby="headingThree">
                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-03-Approve.png?width=1164&amp;name=platform-htw-03-Approve.png"} className="hs-image-widget " />
                                </div>
                                <div className="accordion-tab-pane" role="tabpanel" aria-labelledby="headingFour">
                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-04-Measure.png?width=1164&amp;name=platform-htw-04-Measure.png"} className="hs-image-widget " />
                                </div>
                                <div className="accordion-tab-pane" role="tabpanel" aria-labelledby="headingFive">
                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-05-License.png?width=1164&amp;name=platform-htw-05-License.png"} className="hs-image-widget " />
                                </div>
                            </div>

                            <div className="accordion col-12 col-lg-6" id="accordionWrapper">
                                <h3 className="text-center text-lg-left mw-100 mb-4 mt-5 mt-lg-0"><span id="hs_cos_wrapper_heading-subject" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" data-hs-cos-general-type="widget" data-hs-cos-type="text">How ABRAND works</span></h3>
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <button className="btn btn-link active" type="button" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                            CREATE A CAMPAIGN
                                        </button>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionWrapper">
                                        <div className="card-body">
                                            Create a brief in under 10 minutes with the 5-step Campaign Builder.
                                            <div className="d-block d-lg-none text-center">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-01-create.png"} className="hs-image-widget" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                                            WATCH THE CONTENT ROLL IN
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionWrapper">
                                        <div className="card-body">Discover a goldmine of eye-catching, user-generated content celebrating your brand.

                                            <div className="d-block d-lg-none text-center">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-02-Content.png?width=1164&amp;name=platform-htw-02-Content.png"} className="hs-image-widget " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">Approve. Publish. Repeat
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionWrapper">
                                        <div className="card-body">Approve your favourites and our influencers will post it to their social media channels, reaching thousands.

                                            <div className="d-block d-lg-none text-center">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-03-Approve.png?width=1164&amp;name=platform-htw-03-Approve.png"} className="hs-image-widget" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">Measure your success
                                        </button>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionWrapper">
                                        <div className="card-body">Review what performed with our platform’s first-party data and social media analytics.

                                            <div className="d-block d-lg-none text-center">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-04-Measure.png?width=1164&amp;name=platform-htw-04-Measure.png"} className="hs-image-widget " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFive">LICENSE &amp; AMPLIFY
                                        </button>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionWrapper">
                                        <div className="card-body">Purchase the rights to your best-performing content and boost it to your desired audience.

                                            <div className="d-block d-lg-none text-center">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-htw-05-License.png?width=1164&amp;name=platform-htw-05-License.png"} className="hs-image-widget " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container-fluid col-12 col-lg-11 grid-content-wrapper">
                        <section className="a-grid-two-column-customizable source-instant-branded">
                            <div className="a-global inner-width">
                                <div className="two-column right">
                                    <div className="col col-ifv">
                                        <div className="video-wrapper">
                                            <div id="hs_cos_wrapper_module_161399675195211_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="ifv_group.video">
                                                <script src="https://fast.wistia.com/embed/medias/37zbck9c0m.jsonp" async></script>
                                                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                                <div className="wistia_responsive_padding" style={{"padding":"81.25% 0 0 0;","position":"relative;"}}>
                                                    <div className="wistia_responsive_wrapper" style={{"height":"100%;","left":"0;","position":"absolute;","top":"0;","width":"100%;"}}>
                                                        <div className="wistia_embed wistia_async_37zbck9c0m videoFoam=true" style={{"height":"100%;","position":"relative;","width":"100%"}}>
                                                            <div className="wistia_swatch" style={{"height":"100%;","left":"0;","opacity":"0;","overflow":"hidden;","position":"absolute;","top":"0;","transition":"opacity 200ms;","width":"100%;"}}>
                                                                <img src={"https://fast.wistia.com/embed/medias/37zbck9c0m/swatch"} style={{ "filter": "blur(5px);", "height": "100%;", "object-fit": "contain;", "width": "100%;" }} alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col col-cont-desc">
                                        <div className="copy-wrapper">
                                            <div id="hs_cos_wrapper_module_161399675195211_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="content_desc_group.copy">
                                                <div className="s-global">
                                                    <h3 className="my-4">Source instant branded content at the drop of a hat</h3>
                                                    <p className="s-global__description" style={{"text-align":"left;"}}>ABRAND’s Campaign Builder lets you find real customers to celebrate your products through high-quality, engaging and effective on-brand content.</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="a-grid-single-column">
                            <div className="s-global inner-width d-flex flex-column align-items-center">
                                <div className="col-12 col-lg-7 m-0 p-0">

                                    <div id="hs_cos_wrapper_module_16158020125298" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                        <section className="wistia-video" style={{"width": "100%"}}>
                                            <div id="hs_cos_wrapper_module_16158020125298_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="wistia_embeded_code">
                                                <script src="https://fast.wistia.com/embed/medias/2e7kfh0ntr.jsonp" async></script>
                                                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                                <div className="wistia_responsive_padding" style={{"padding":"81.04% 0 0 0;","position":"relative;"}}>
                                                    <div className="wistia_responsive_wrapper" style={{"height":"100%;","left":"0;","position":"absolute;","top":"0;","width":"100%;"}}>
                                                        <div className="wistia_embed wistia_async_2e7kfh0ntr videoFoam=true" style={{"height":"100%;","position":"relative;","width":"100%"}}>
                                                            <div className="wistia_swatch" style={{"height":"100%;","left":"0;","opacity":"0;","overflow":"hidden;","position":"absolute;","top":"0;","transition":"opacity 200ms;","width":"100%;"}}><img src={"https://fast.wistia.com/embed/medias/2e7kfh0ntr/swatch"} style={{"filter":"blur(5px);","height":"100%;","object-fit":"contain;","width":"100%;"}} alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                <h3 className="col-12 col-lg-6 p-0 text-left mt-4 mb-4 mt-lg-0 mx-0">
                                    <span id="hs_cos_wrapper_track-one-place-header" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" data-hs-cos-general-type="widget" data-hs-cos-type="text">Track it all in one place</span>
                                </h3>
                                <p className="s-global__description text-left col-12 col-lg-6 p-0 m-0">
                                    <span id="hs_cos_wrapper_track-one-place-description" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" data-hs-cos-general-type="widget" data-hs-cos-type="text">Seamlessly manage 100’s of brand ambassadors. The ABRAND Inbox ensures your comms, sampling, approvals, payments and 1:1 feedback are sorted. </span>
                                </p>
                            </div>
                        </section>

                        <section className="a-grid-two-column-customizable">
                            <div className="s-global inner-width">
                                <div id="hs_cos_wrapper_module_161399801695414" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                    <div className="two-column ">
                                        <div className="col col-ifv">

                                            <div className="video-wrapper">
                                                <div id="hs_cos_wrapper_module_161399801695414_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="ifv_group.video">
                                                    <script src="https://fast.wistia.com/embed/medias/j85bhpk7bb.jsonp" async></script>
                                                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                                    <div className="wistia_responsive_padding" style={{"padding":"78.33% 0 0 0","position":"relative;"}}>
                                                        <div className="wistia_responsive_wrapper" style={{"height":"100%;","left":"0;","position":"absolute;","top":"0;","width":"100%;"}}>
                                                            <div className="wistia_embed wistia_async_j85bhpk7bb videoFoam=true" style={{"height":"100%;","position":"relative;","width":"100%"}}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col col-cont-desc">



                                            <div className="copy-wrapper">
                                                <div id="hs_cos_wrapper_module_161399801695414_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="content_desc_group.copy">
                                                    <div className="s-global">
                                                        <h3 className="my-4">Drive ROI</h3>
                                                        <p className="s-global__description" style={{"text-align": "left;"}}>Access advanced performance insights to measure success with first-party audience data and predictive performance analytics.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="a-grid-two-column-customizable">
                            <div className="s-global inner-width">
                                <div id="hs_cos_wrapper_module_161400050105831" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                    <div className="two-column right">
                                        <div className="col col-ifv">


                                            <div className="img-wrapper">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=1058&amp;height=742&amp;name=platform-license-a.png"} alt="license quality branded content" width="1058" height="742" srcset={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=529&amp;height=371&amp;name=platform-license-a.png 529w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=1058&amp;height=742&amp;name=platform-license-a.png 1058w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=1587&amp;height=1113&amp;name=platform-license-a.png 1587w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=2116&amp;height=1484&amp;name=platform-license-a.png 2116w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=2645&amp;height=1855&amp;name=platform-license-a.png 2645w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-license-a.png?width=3174&amp;height=2226&amp;name=platform-license-a.png 3174w"} sizes="(max-width: 1058px) 100vw, 1058px" />
                                            </div>


                                        </div>

                                        <div className="col col-cont-desc">



                                            <div className="copy-wrapper">
                                                <div id="hs_cos_wrapper_module_161400050105831_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="content_desc_group.copy">
                                                    <div className="s-global">
                                                        <h3 className="my-4">License quality branded content whenever you need it</h3>
                                                        <p className="s-global__description" style={{"text-align": "left;"}}>With every campaign you run, your branded content library grows. Instantly purchase what you love for your website, socials, billboard ads and more!</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="a-grid-single-column">
                            <div className="s-global inner-width d-flex flex-column align-items-center">
                                <div className="col-12 col-lg-7 m-0 p-0">
                                    <div id="hs_cos_wrapper_module_16158019476755" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                        <section className="wistia-video" style={{"width": "100%"}}>
                                            <div id="hs_cos_wrapper_module_16158019476755_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="wistia_embeded_code">
                                                <script src="https://fast.wistia.com/embed/medias/a9mcn63asz.jsonp" async></script>
                                                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                                <div className="wistia_responsive_padding" style={{"padding":"78.33% 0 0 0;","position":"relative;"}}>
                                                    <div className="wistia_responsive_wrapper" style={{"height":"100%;","left":"0;","position":"absolute;","top":"0;","width":"100%;"}}>
                                                        <div className="wistia_embed wistia_async_a9mcn63asz videoFoam=true" style={{"height":"100%;","position":"relative;","width":"100%;"}}>&nbsp;</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                <h3 className="col-12 col-lg-6 p-0 text-left mt-4 mb-4 mt-lg-0 mx-0">
                                    <span id="hs_cos_wrapper_create-your-community-header" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" data-hs-cos-general-type="widget" data-hs-cos-type="text">Create your own community of brand fans</span>
                                </h3>
                                <p className="s-global__description text-left col-12 col-lg-6 p-0 m-0">
                                    <span id="hs_cos_wrapper_create-your-community-description" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" data-hs-cos-general-type="widget" data-hs-cos-type="text">Use Brand-Fans to organise your favourite creators and influencers into groups, invite them to your private campaigns and build ongoing relationships — all within the platform.</span>
                                </p>
                            </div>
                        </section>

                        <section className="a-grid-two-column-customizable">
                            <div className="s-global inner-width">
                                <div id="hs_cos_wrapper_module_161400074632533" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                    <div className="two-column ">
                                        <div className="col col-ifv">


                                            <div className="img-wrapper">
                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=986&amp;height=855&amp;name=platform-avs-brand-safety.png"} alt="brand safety" width="986" height="855" srcset={"https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=493&amp;height=428&amp;name=platform-avs-brand-safety.png 493w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=986&amp;height=855&amp;name=platform-avs-brand-safety.png 986w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=1479&amp;height=1283&amp;name=platform-avs-brand-safety.png 1479w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=1972&amp;height=1710&amp;name=platform-avs-brand-safety.png 1972w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=2465&amp;height=2138&amp;name=platform-avs-brand-safety.png 2465w, https://www.tribegroup.co/hs-fs/hubfs/Website/platform/platform-avs-brand-safety.png?width=2958&amp;height=2565&amp;name=platform-avs-brand-safety.png 2958w"} sizes="(max-width: 986px) 100vw, 986px" />
                                            </div>


                                        </div>

                                        <div className="col col-cont-desc">



                                            <div className="copy-wrapper">
                                                <div id="hs_cos_wrapper_module_161400074632533_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="content_desc_group.copy">
                                                    <div className="s-global">
                                                        <h3 className="my-4">Brand safety</h3>
                                                        <p className="s-global__description" style={{"text-align": "left;"}}>Every creator passes ABRAND’s proprietary AVS system to ensure you’re only connected with authentic creators and real audiences.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <section className="bg-gray container-fluid creator-testimonials-wrapper">
                        <div className="a-home-testimonials creator-testimonials testimonials inner-width inner-width-mobile">
                            <span id="hs_cos_wrapper_quote-icon"><img src={"assets/images/Brand-Creator-TestimonialsAccent-x2.png"} alt="" title=""/></span>
                            <div className="row">
                                <div id="hs_cos_wrapper_testimonial-slider">
                                    <div>
                                        <div className="testimonial-slide brand">
                                            <div className="control-image">

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png"} alt="brandlogo-mars-b" width="800" height="162" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=400&amp;height=81&amp;name=brandlogo-mars-b.png 400w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=800&amp;height=162&amp;name=brandlogo-mars-b.png 800w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1200&amp;height=243&amp;name=brandlogo-mars-b.png 1200w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=1600&amp;height=324&amp;name=brandlogo-mars-b.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2000&amp;height=405&amp;name=brandlogo-mars-b.png 2000w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/brandlogo-mars-b.png?width=2400&amp;height=486&amp;name=brandlogo-mars-b.png 2400w"} sizes="(max-width: 800px) 100vw, 800px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png"} alt="display-logo-mars" width="156" height="156" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=78&amp;height=78&amp;name=display-logo-mars.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=156&amp;height=156&amp;name=display-logo-mars.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=234&amp;height=234&amp;name=display-logo-mars.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=312&amp;height=312&amp;name=display-logo-mars.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=390&amp;height=390&amp;name=display-logo-mars.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/display-logo-mars.png?width=468&amp;height=468&amp;name=display-logo-mars.png 468w"} sizes="(max-width: 156px) 100vw, 156px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> MARS Chocolate </span>
                                                    <span className="reviewer_detail1"> Michael Davies </span>
                                                    <span className="reviewer_detail2"> Global Media Director </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">


                                                    <img src={"assets/images/home/testimonials/mars-choc.jpg"} alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg"} alt="seachiic" width="150" height="150" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=75&amp;height=75&amp;name=displaypic-mars.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=150&amp;height=150&amp;name=displaypic-mars.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=225&amp;height=225&amp;name=displaypic-mars.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=300&amp;height=300&amp;name=displaypic-mars.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=375&amp;height=375&amp;name=displaypic-mars.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Mars/displaypic-mars.jpg?width=450&amp;height=450&amp;name=displaypic-mars.jpg 450w"} sizes="(max-width: 150px) 100vw, 150px"/>


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

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png"} alt="swisse" width="360" height="134" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=180&amp;height=67&amp;name=swisse.png 180w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=360&amp;height=134&amp;name=swisse.png 360w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=540&amp;height=201&amp;name=swisse.png 540w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=720&amp;height=268&amp;name=swisse.png 720w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=900&amp;height=335&amp;name=swisse.png 900w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/case-studies/00-Logos/swisse.png?width=1080&amp;height=402&amp;name=swisse.png 1080w"} sizes="(max-width: 360px) 100vw, 360px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png"} alt="Swisse" width="156" height="156" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=78&amp;height=78&amp;name=displaylogo-swisse.png 78w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=156&amp;height=156&amp;name=displaylogo-swisse.png 156w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=234&amp;height=234&amp;name=displaylogo-swisse.png 234w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=312&amp;height=312&amp;name=displaylogo-swisse.png 312w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=390&amp;height=390&amp;name=displaylogo-swisse.png 390w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaylogo-swisse.png?width=468&amp;height=468&amp;name=displaylogo-swisse.png 468w"} sizes="(max-width: 156px) 100vw, 156px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> Swisse </span>
                                                    <span className="reviewer_detail1"> Siobhan Wend </span>
                                                    <span className="reviewer_detail2"> PR Adviser </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">


                                                    <img src={"assets/images/home/testimonials/swisse.jpg"} alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg"} alt="the.life.of.laura" width="150" height="150" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=75&amp;height=75&amp;name=displaypic-swisse.jpg 75w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=150&amp;height=150&amp;name=displaypic-swisse.jpg 150w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=225&amp;height=225&amp;name=displaypic-swisse.jpg 225w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=300&amp;height=300&amp;name=displaypic-swisse.jpg 300w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=375&amp;height=375&amp;name=displaypic-swisse.jpg 375w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/Testimonials/Swisse/displaypic-swisse.jpg?width=450&amp;height=450&amp;name=displaypic-swisse.jpg 450w"} sizes="(max-width: 150px) 100vw, 150px"/>


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

                                                <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png"} alt="adobe logo" width="1600" height="324" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=800&amp;height=162&amp;name=brand-logo-adobe.png 800w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=1600&amp;height=324&amp;name=brand-logo-adobe.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=2400&amp;height=486&amp;name=brand-logo-adobe.png 2400w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=3200&amp;height=648&amp;name=brand-logo-adobe.png 3200w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4000&amp;height=810&amp;name=brand-logo-adobe.png 4000w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/brand-logo-adobe.png?width=4800&amp;height=972&amp;name=brand-logo-adobe.png 4800w"} sizes="(max-width: 1600px) 100vw, 1600px"/>
                                            </div>
                                            <div className="reviewer">
                                                <div className="dp">


                                                    <img src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png"} alt="adobe logo" width="312" height="312" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=156&amp;height=156&amp;name=display-logo-adobe.png 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=312&amp;height=312&amp;name=display-logo-adobe.png 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=468&amp;height=468&amp;name=display-logo-adobe.png 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=624&amp;height=624&amp;name=display-logo-adobe.png 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=780&amp;height=780&amp;name=display-logo-adobe.png 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-logo-adobe.png?width=936&amp;height=936&amp;name=display-logo-adobe.png 936w"} sizes="(max-width: 312px) 100vw, 312px"/>

                                                </div>
                                                <div className="reviewer-info">
                                                    <span className="reviewer_name"> Adobe </span>
                                                    <span className="reviewer_detail1"> David Medina </span>
                                                    <span className="reviewer_detail2"> Senior Web Producer - Adobe Photoshop Elements </span>
                                                </div>
                                            </div>
                                            <div className="featured-image-wrapper">
                                                <div className="featured-image">

                                                    <img src={"assets/images/home/testimonials/adobe-pic.jpg"} alt=""/>

                                                </div>



                                                <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg"} alt="satkinsongrier" width="312" height="312" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=156&amp;height=156&amp;name=display-pic-adobe.jpg 156w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=312&amp;height=312&amp;name=display-pic-adobe.jpg 312w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=468&amp;height=468&amp;name=display-pic-adobe.jpg 468w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=624&amp;height=624&amp;name=display-pic-adobe.jpg 624w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=780&amp;height=780&amp;name=display-pic-adobe.jpg 780w, https://www.tribegroup.co/hs-fs/hubfs/Website/testimonials/display-pic-adobe.jpg?width=936&amp;height=936&amp;name=display-pic-adobe.jpg 936w"} sizes="(max-width: 312px) 100vw, 312px"/>


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
                    <section className="what-are-you-waiting-for inner-width">
                        <div className="image-wrapper">
                            <span id="hs_cos_wrapper_featured-image-slider">
                                <div>
                                    <div className="hs_cos_wrapper">
                                        <div className="image-with-handle lazy-load">


                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=896&amp;height=680&amp;name=BA-CTA-Image-2.png"} alt="ajourneytoseven" width="896" height="680" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=448&amp;height=340&amp;name=BA-CTA-Image-2.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=896&amp;height=680&amp;name=BA-CTA-Image-2.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-2.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-2.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-2.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-2.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-2.png 2688w"} sizes="(max-width: 896px) 100vw, 896px"/>
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


                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=896&amp;height=680&amp;name=BA-CTA-Image-1.png"} alt="luxe_everyday" width="896" height="680" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=448&amp;height=340&amp;name=BA-CTA-Image-1.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=896&amp;height=680&amp;name=BA-CTA-Image-1.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-1.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-1.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-1.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-1.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-1.png 2688w"} sizes="(max-width: 896px) 100vw, 896px"/>


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


                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=896&amp;height=680&amp;name=BA-CTA-Image-3.png"} alt="adventures.with.mase" width="896" height="680" loading="lazy" srcset={"https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=448&amp;height=340&amp;name=BA-CTA-Image-3.png 448w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=896&amp;height=680&amp;name=BA-CTA-Image-3.png 896w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=1344&amp;height=1020&amp;name=BA-CTA-Image-3.png 1344w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=1792&amp;height=1360&amp;name=BA-CTA-Image-3.png 1792w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=2240&amp;height=1700&amp;name=BA-CTA-Image-3.png 2240w, https://www.tribegroup.co/hs-fs/hubfs/tribe-Website-2018-Assets/Brands-Agencies/BA-CTA-Image-3.png?width=2688&amp;height=2040&amp;name=BA-CTA-Image-3.png 2688w"} sizes="(max-width: 896px) 100vw, 896px"/>


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
                            <h2 className="a-global-secondary-header mw-100 text-left">What are you waiting for?</h2>
                            <p className="a-global-description">Get 1000s of Influencers talking about your brand today</p>
                            <a href="#" className="cta-button primary-cta">REQUEST A DEMO</a>
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
                                                            <input id="option" className="hs-input " type="radio" name="option_choices" value="influencer" checked=""/>
                                                            <span>I'm a Creator</span>
                                                        </label>
                                                    </li>
                                                    <li className="hs-form-radio">
                                                        <label>
                                                            <input id="option" className="hs-input " type="radio" name="option_choices" value="influencer" checked=""/>
                                                            <span>I'm a Brand</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hs_email">
                                            <div className="input">
                                                <input id="email" className="hs-input" type="email" name="email" required="" placeholder="Email address*" value="" autocomplete="email"/>
                                                <button>
                                                <span>SUBSCRIBE</span>
                                                <span className ="arrow-button"> <img src={"assets/images/right-arrow.svg"} alt="subscribe newsletter"/> </span>
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
                                        <img src={"assets/images/Footer-NYC-x2.png"} data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">New York</span>
                                        <span className ="address-line">Floor 3, 230 Park Ave, New York City, New York 10169</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src={"assets/images/Footer-LDN-x2.png"} data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">London</span>
                                        <span className ="address-line">3 Waterhouse Square 138 Holborn, London EC1N 2SW</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src={"assets/images/Footer-MEL-x2.png"} data-loaded="true"/>
                                        <div className ="location-address">
                                        <span className ="name">Melbourne</span>
                                        <span className ="address-line">L4/180 Albert Rd, South Melbourne, VIC 3205</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="location">
                                        <img src={"assets/images/Footer-SYD-x2.png"} data-loaded="true"/>
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
            </body>
        )
    }
}

export default brands
