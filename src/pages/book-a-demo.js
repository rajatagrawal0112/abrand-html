import React from 'react'
import { NavLink } from 'react-router-dom';

class bookADemo extends React.Component {
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

                                    <p><NavLink exact to="/brands">
                                        Platform
                                    </NavLink>
                                    </p>
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
                    <div class="login_calltoaction"> <a href="#">Login</a> <a class="cta-button primary-cta" href="/signup">Get Started Today</a> </div>
                </header>
                <header class="mobile-header  home" role="none">
                    <div class="icon-wrapper" role="navigation">
                        <a href="/"><img src={"assets/images/logo-mobile.png"} width="50" style={{ "width": "50px" }} alt="Logo" title="Logo" /></a>
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
                    <a id="" class="cta-button primary-cta" href="/signup" title="Get Started Today">Get Started Today</a>
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
                    <div id="page-form-main-content">
                        <section id="page-form-image-wrapper" class="fade-in-image inner-width-mobile">
                            <img src={"assets/images/book-demo/2xBookADemo.png"} alt="" class="hs-cta-img" />
                            <h1 class="header">
                                <p style={{ "font-size": "24px;" }}>Level up your digital strategy with influencer marketing and branded content that performs.</p>
                            </h1>
                            <div class="points">
                                <span id="hs_cos_wrapper_Points_copy" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style={{ "": "" }} data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
                                    <p><span style={{ "font-weight": "500;" }}>• Get started quickly<strong> <span style={{ "font-weight": "300;" }}>with an annual subscription or pay-per-use access</span></strong></span></p>
                                    <p><span style={{ "font-weight": "500;" }}>• See high quality content <span style={{ "font-weight": "300;" }}> from our creator network with a live inbox demo</span></span></p>
                                    <p><span style={{ "font-weight": "500;" }}>• Reduce costs <span style={{ "font-weight": "300;" }}>with transparent and flexible pricing</span></span></p>
                                    <p><span style={{ "font-weight": "500;" }}>• Drive ROI <span style={{ "font-weight": "300;" }}>with 1st party data and performance analytics</span></span></p>
                                    <p><span style={{ "font-weight": "500;" }}>• Learn best practice <span style={{ "font-weight": "300;" }}>with industry-specific case studies</span></span></p>
                                </span>
                            </div>
                        </section>
                        <section id="page-form">
                            <div class="inner-width-mobile">
                                <h2 class="header">Request your custom demo</h2>
                                <div class="book-a-demo-form">
                                    <ul>
                                        <li class="half"><input class="hs-input" type="text" name="firstname" required="" value="" placeholder="First Name*" /></li>
                                        <li class="half"><input class="hs-input" type="text" name="firstname" required="" value="" placeholder="Email*" /></li>
                                        <li><input class="hs-input" type="text" name="firstname" required="" value="" placeholder="Phone Number*" /></li>
                                        <li class="select-field">
                                            <select id="region_dropdown" required="" class="hs-input is-placeholder" name="region_dropdown">
                                                <option value="" disabled="" selected="">Region*</option>
                                                <option value="APAC">Australia &amp; New Zealand</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="US">United States &amp; Canada</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </li>
                                        <li><input class="hs-input" type="text" name="firstname" required="" value="" placeholder="Company Name*" /></li>
                                        <li class="select-field">
                                            <select id="CompanyType" required="" class="hs-input is-placeholder" name="CompanyType">
                                                <option value="" disabled="" selected="">Company Type*</option>
                                                <option value="I work in agency">I work in agency</option>
                                                <option value="I work for brand">I work for brand</option>
                                            </select>
                                        </li>
                                        <li class="select-field">
                                            <select id="company-size" required="" class="hs-input is-placeholder" name="company_size">
                                                <option value="" disabled="" selected="">Company Size*</option>
                                                <option value="1-10">1-10</option>
                                                <option value="11-50">11-50</option>
                                                <option value="51-200">51-200</option>
                                                <option value="201-1000">201-1000</option>
                                                <option value="1000+">1000+</option>
                                            </select>
                                        </li>
                                        <li class="select-field">
                                            <select id="category" required="" class="hs-input is-placeholder" name="category">
                                                <option value="" disabled="" selected="">Which category best describes your product or business?*</option>
                                                <option value="Animals">Animals</option>
                                                <option value="Automotive">Automotive</option>
                                                <option value="Beauty &amp; Personal Care">Beauty &amp; Personal Care</option>
                                                <option value="Business, Finance &amp; Insurance">Business, Finance &amp; Insurance</option>
                                                <option value="Children &amp; Family">Children &amp; Family</option>
                                                <option value="Education &amp; Books">Education &amp; Books</option>
                                                <option value="Entertainment &amp; Events">Entertainment &amp; Events</option>
                                                <option value="Fashion">Fashion</option>
                                                <option value="Food &amp; Drink">Food &amp; Drink</option>
                                                <option value="Fitness &amp; Sport">Health</option>
                                                <option value="Home &amp; Garden">Home &amp; Garden</option>
                                                <option value="Photography, Art &amp; Design">Photography, Art &amp; Design</option>
                                                <option value="Restaurant, Bars &amp; Hotels">Restaurant, Bars &amp; Hotels</option>
                                                <option value="Social Enterprise &amp; Not-for-profit">Social Enterprise &amp; Not-for-profit</option>
                                                <option value="Social Media, Web &amp; Tech">Social Media, Web &amp; Tech</option>
                                                <option value="Travel &amp; Destinations">Travel &amp; Destinations</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </li>
                                        <li class="select-field">
                                            <select id="contact_source" class="hs-input is-placeholder" name="contact_source">
                                                <option value="" disabled="" selected="">How did you hear about us?</option>
                                                <option value="Advertising">Advertising</option>
                                                <option value="Events">Events</option>
                                                <option value="Blog or publication">Blog or publication</option>
                                                <option value="Search engine">Search engine</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="LinkedIN">LinkedIN</option>
                                                <option value="Twitter">Twitter</option>
                                                <option value="Reviews website">Reviews website</option>
                                                <option value="Word of mouth">Word of mouth</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="styled-checkbox">
                                                <input id="t_c_agreement" class="hs-checkbox-input" type="checkbox" name="t_c_agreement" value="true" />
                                                <span class="checkbox"></span>
                                                <span>I agree to the T&amp; C's and Privacy Policy</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="styled-checkbox">
                                                <input id="confirm_opt" class="hs-checkbox-input" type="checkbox" name="confirm_opt_in" value="true" />
                                                <span class="checkbox"></span>
                                                <span>Sign me up to receive exclusive marketing updates and insights from ABRAND</span>
                                            </label>

                                        </li>
                                        <li class="button"><input type="button" class="cta-button primary-cta" value="Request a Demo" /></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
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

export default bookADemo;
