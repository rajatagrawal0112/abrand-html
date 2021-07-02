import React from 'react'
import { NavLink } from 'react-router-dom'


class pricing extends React.Component {
    render() {
        return (
            <body className="pricing">
                <header className="main-header capped-width has-shadow" role="none">
                    <div className="navigation">
                        <div className="logo"><img src={"assets/images/logo.png"} alt=""/> </div>
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
                        <a href="/"><img src={"assets/images/logo-mobile.png"} width="50" style={{ "width": "50px" }} alt="Logo" title="Logo"/></a>
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
                    <div className="pricing-v2 pricing-v3">
                        <section className="pricing-copy-section">
                            <div className="inner-width-mobile inner-width">
                                <h1>Built for marketing <br/> teams of all sizes.</h1>
                            </div>
                        </section>
                        <div className="mobile-only inner-width-mobile">
                            <div className="pricing-card pricing-self-serve">
                                <h4 className="tag">TRY US</h4>
                                <div className="pricing-card-wrapper">
                                    <div className="row row-1">
                                        <h2>PAY-PER-USE</h2>
                                        <div className="copy self-serve-copy">
                                            <p>You’d like to get a feel for the platform as a solution to your influencer marketing and branded content needs.<br/><br/>Get started today!</p>
                                            </div>
                                        </div>
                                        <div className="row row-2">
                                            <div className="self-serve-fee">
                                                <div className="fee">
                                                    <p className="price">$0</p>
                                                    <p className="subheader">ANNUAL FEE</p>
                                                    <p className="details">$299 Activation fee per campaign</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-3">
                                            <div className="self-serve-user">
                                                <div className="user-title">1 user</div>
                                            </div>
                                        </div>
                                        <div className="row row-4">
                                            <div className="user-title">Basic</div>
                                            <p>&nbsp;</p>

                                            <div className="self-serve-list">
                                                <ul>
                                                    <li>50,000 Verified Creators</li>
                                                    <li>Secure payments and legals</li>
                                                    <li>Basic platform features</li>
                                                    <li>Basic data and reporting</li>
                                                    <li>Standard marketplace and content licensing rates</li>
                                                    <li>Account support by email</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row row-5">
                                            <span className="hs-cta-wrapper">
                                                <a className="cta-button primary-cta" href="#">Get Started</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-card pricing-pro">
                                    <h4 className="tag">MOST POPULAR</h4>

                                    <div className="pricing-card-wrapper">
                                        <div className="row row-1">
                                            <h2>PRO</h2>
                                            <div className="copy pro-copy">
                                                <p><span>You’re a marketer who needs features and data to help source creators, approve content, measure performance and execute campaigns seamlessly across the year.</span></p>
                                            </div>
                                        </div>
                                        <div className="row row-2">
                                            <div className="pro-fee">
                                                <div className="fee">
                                                    <p className="price">Custom</p>
                                                    <p className="subheader">ANNUAL FEE</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-3">
                                            <div className="pro-user">
                                                <div className="user-title">1 user</div>
                                                <p>Unlimited campaigns</p>
                                            </div>
                                        </div>
                                        <div className="row row-4">
                                            <div className="user-title" style={{ "textAlign": "left" }}>Mid</div>
                                            <p style={{ "textAlign": "left" }}>Everything in Pay-Per-Use, plus:</p>
                                            <p style={{ "textAlign": "left" }}>&nbsp;</p>

                                            <div className="pro-list">
                                                <ul>
                                                    <li>Advanced platform features</li>
                                                    <li>Full 1st party data and reporting</li>
                                                    <li>Account support by phone and email</li>
                                                    <li>User onboarding</li>
                                                    <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row row-5">
                                            <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-card pricing-teams">
                                    <div className="pricing-card-wrapper">
                                        <div className="row row-1">
                                            <h2>TEAMS</h2>
                                            <div className="copy teams-copy">
                                                <p><span>You’re a marketing team with ongoing influencer activity &amp; digital content needs. Your team needs to effortlessly collaborate, &amp; achieve greater performance efficiencies from your annual activity.</span></p>
                                            </div>
                                        </div>
                                        <div className="row row-2">
                                            <div className="teams-fee">
                                                <div className="fee">
                                                    <div className="fee">
                                                        <p className="price">Custom</p>
                                                        <p className="subheader">ANNUAL FEE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-3">
                                            <div className="teams-user">
                                                <div className="user-title">Up to 5 users</div>
                                                <p>Unlimited campaigns + Unlimited guest &amp; collaborator access</p>
                                            </div>
                                        </div>
                                        <div className="row row-4">
                                            <div className="user-title">Advanced</div>
                                            <p style={{ "textAlign": "left" }}>Everything in Pro, plus:</p>
                                            <p>&nbsp;</p>

                                            <div className="teams-list">
                                                <ul>
                                                    <li>Access for up to 5 team members</li>
                                                    <li>Advanced reporting and industry benchmarking</li>
                                                    <li>Account support by phone and email for all users</li>
                                                    <li>Annual user training and onboarding for all users</li>
                                                    <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                    <li>Access to exclusive offers from ABRAND’s content partners</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row row-5">
                                            <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-card pricing-enterprise">
                                    <div className="pricing-card-wrapper">
                                        <div className="row row-1">
                                            <h2>ENTERPRISE</h2>
                                            <div className="copy pro-copy">
                                                <p><span>Let us customise a package of seats, and support to meet your organisation’s influencer marketing and digital content objectives.</span></p>
                                            </div>
                                        </div>
                                        <div className="row row-2">
                                            <div className="enterprise-fee">
                                                <div className="fee">
                                                    <div className="fee">
                                                        <p className="price">Custom</p>
                                                        <p className="subheader">ANNUAL FEE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-3">
                                            <div className="enterprise-user">
                                                <div className="user-title">Custom Users</div>
                                                <p>Unlimited campaigns + Unlimited guest &amp; collaborator access</p>
                                            </div>
                                        </div>
                                        <div className="row row-4">
                                            <div className="user-title">Advanced</div>
                                            <p style={{ "textAlign": "left" }}>Everything in Teams, plus:</p>
                                            <p>&nbsp;</p>

                                            <div className="enterprise-list">
                                                <ul>
                                                    <li>Fully customisable user plan according to multi-brand usage, and multi-regional usage</li>
                                                    <li>Customised data analysis and industry benchmarking</li>
                                                    <li>Account support by phone and email for all users</li>
                                                    <li>Ongoing user training and onboarding for all users</li>
                                                    <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row row-5">
                                            <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="desktop-only inner-width-mobile inner-width">
                                <div className="desktop-pricing-wrapper">
                                    <div className="row row-1">
                                        <h4 className="column tag">TRY US</h4>
                                        <h4 className="column tag">MOST POPULAR</h4>
                                        <div className="column empty-tags"></div>
                                        <div className="column empty-tags"></div>
                                    </div>
                                    <div className="row row-2">
                                        <div className="copy self-serve-copy">
                                            <h2>PAY-PER-USE</h2>
                                            <p>You’d like to get a feel for the platform as a solution to your influencer marketing and branded content needs.<br/><br/>Get started today!</p>
                                            </div>
                                            <div className ="copy pro-copy">
                                            <h2>PRO</h2>
                                            <p>You’re a marketer who needs features and data to help source creators, approve content, measure performance and execute campaigns seamlessly across the year.</p>
                                            </div>
                                            <div className ="copy teams-copy">
                                            <h2>TEAMS</h2>
                                            <p>You’re a marketing team with ongoing influencer activity &amp; digital content needs.Your team needs to effortlessly collaborate, &amp; achieve greater performance efficiencies from your annual activity.</p>
                                            </div>
                                            <div className ="copy pro-copy">
                                            <h2>ENTERPRISE</h2>
                                            <p>Let us customise a package of seats, and support to meet your organisation’s influencer marketing and digital content objectives.</p>
                                            </div>
                                        </div>

                                        <div className="row row-3">
                                            <div className="self-serve-fee">
                                                <div className="fee">
                                                    <p className="price">$0</p>
                                                    <p className="subheader">ANNUAL FEE</p>
                                                    <br/>
                                                    <p className ="details">$299 Activation fee per campaign</p>
                                                </div>
                                            </div>
                                            <div className="pro-fee">
                                                <div className="fee">
                                                    <p className="price">Custom</p>
                                                    <p className="subheader">ANNUAL FEE</p>
                                                </div>
                                            </div>
                                            <div className="teams-fee">
                                                <div className="fee">
                                                    <p className="price">Custom</p>
                                                    <p className="subheader">ANNUAL FEE</p>
                                                </div>
                                            </div>
                                            <div className="enterprise-fee">
                                                <div className="fee">
                                                    <div className="fee">
                                                        <p className="price">Custom</p>
                                                        <p className="subheader">ANNUAL FEE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row row-4">
                                            <div className="self-serve-user">
                                                <div className="user-title">1 user</div>
                                            </div>
                                            <div className="pro-user">
                                                <div className="user-title">1 user</div>
                                                <p>Unlimited campaigns</p>
                                            </div>
                                            <div className="teams-user">
                                                <div className="user-title">Up to 5 users</div>
                                                <p>Unlimited campaigns + Unlimited guest &amp; collaborator access</p>
                                            </div>
                                            <div className="enterprise-user">
                                                <div className="user-title">Custom Users</div>
                                                <p>Unlimited campaigns + Unlimited guest &amp; collaborator access</p>
                                            </div>
                                        </div>
                                        <div className="row row-5">
                                            <div>
                                                <div className="user-title">Basic</div>
                                                <p>&nbsp;</p>

                                                <div className="self-serve-list">
                                                    <ul>
                                                        <li>50,000 Verified Creators</li>
                                                        <li>Secure payments and legals</li>
                                                        <li>Basic platform features</li>
                                                        <li>Basic data and reporting</li>
                                                        <li>Standard marketplace and content licensing rates</li>
                                                        <li>Account support by email</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="user-title" style={{ "textAlign": "left" }}>Mid</div>
                                                <p style={{ "textAlign": "left" }}>Everything in Pay-Per-Use, plus:</p>
                                                <p style={{ "textAlign": "left" }}>&nbsp;</p>

                                                <div className="pro-list">
                                                    <ul>
                                                        <li>Advanced platform features</li>
                                                        <li>Full 1st party data and reporting</li>
                                                        <li>Account support by phone and email</li>
                                                        <li>User onboarding</li>
                                                        <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="user-title">Advanced</div>
                                                <p>Everything in Pro, plus:</p>
                                                <p>&nbsp;</p>

                                                <div className="teams-list">
                                                    <ul>
                                                        <li>Access for up to 5 team members</li>
                                                        <li>Advanced reporting and industry benchmarking</li>
                                                        <li>Account support by phone and email for all users</li>
                                                        <li>Annual user training and onboarding for all users</li>
                                                        <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                        <li>Access to exclusive offers from ABRAND’s content partners</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="user-title">Advanced</div>
                                                <p>Everything in Teams, plus:</p>
                                                <p>&nbsp;</p>

                                                <div className="enterprise-list">
                                                    <ul>
                                                        <li>Fully customisable user plan according to multi-brand usage, and multi-regional usage</li>
                                                        <li>Customised data analysis and industry benchmarking</li>
                                                        <li>Account support by phone and email for all users</li>
                                                        <li>Ongoing user training and onboarding for all users</li>
                                                        <li>Quarterly business reviews and ongoing campaign optimisation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-6">
                                            <div className="pricing-card-ctas">
                                                <span className="hs-cta-wrapper">
                                                    <a className="cta-button primary-cta" href="#">Get Started</a>
                                                </span>
                                            </div>
                                            <div className="pricing-card-ctas">
                                                <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                            </div>
                                            <div className="pricing-card-ctas">
                                                <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                            </div>
                                            <div className="pricing-card-ctas">
                                                <span className="hs-cta-wrapper"><a className="cta-button primary-cta" href="#">REQUEST DEMO</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="brand-testimonials testimonials">
                                    <div className="inner-width">
                                        <div id="hs_cos_wrapper_testimonial-slider" className="p-testimonials">
                                            <div>
                                                <div className="testimonial-slide brand">
                                                    <div className="control-image">

                                                        <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=800&amp;height=162&amp;name=brand-logo-blendy-1.png"} alt="blendy" width="800" height="162" loading="lazy" srcSet={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=400&amp;height=81&amp;name=brand-logo-blendy-1.png 400w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=800&amp;height=162&amp;name=brand-logo-blendy-1.png 800w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=1200&amp;height=243&amp;name=brand-logo-blendy-1.png 1200w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=1600&amp;height=324&amp;name=brand-logo-blendy-1.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=2000&amp;height=405&amp;name=brand-logo-blendy-1.png 2000w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-blendy-1.png?width=2400&amp;height=486&amp;name=brand-logo-blendy-1.png 2400w"} sizes="(max-width: 800px) 100vw, 800px"/>
                                                    </div>
                                                    <div className="reviewer">
                                                        <div className="dp">


                                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=156&amp;height=156&amp;name=display-logo-blendy.png"} alt="blendy" width="156" height="156" loading="lazy" srcSet={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=78&amp;height=78&amp;name=display-logo-blendy.png 78w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=156&amp;height=156&amp;name=display-logo-blendy.png 156w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=234&amp;height=234&amp;name=display-logo-blendy.png 234w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=312&amp;height=312&amp;name=display-logo-blendy.png 312w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=390&amp;height=390&amp;name=display-logo-blendy.png 390w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-blendy.png?width=468&amp;height=468&amp;name=display-logo-blendy.png 468w"} sizes="(max-width: 156px) 100vw, 156px"/>

                                                        </div>
                                                        <div className="reviewer-info">
                                                            <span className="reviewer_name"> PAY-PER-USE </span>
                                                            <span className="reviewer_detail1"> Rebecca Yau </span>
                                                            <span className="reviewer_detail2"> Customer Service </span>
                                                        </div>
                                                    </div>
                                                    <div className="featured-image-wrapper">
                                                        <div className="featured-image">
                                                            <img className="featured-image-background" src={"assets/images/pricing/polkadot.jpg"}/>

                                                        </div>



                                                        <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=150&amp;height=150&amp;name=display-pic-blendy.png"} alt="blendy" width="150" height="150" loading="lazy" srcSet={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=75&amp;height=75&amp;name=display-pic-blendy.png 75w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=150&amp;height=150&amp;name=display-pic-blendy.png 150w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=225&amp;height=225&amp;name=display-pic-blendy.png 225w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=300&amp;height=300&amp;name=display-pic-blendy.png 300w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=375&amp;height=375&amp;name=display-pic-blendy.png 375w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-blendy.png?width=450&amp;height=450&amp;name=display-pic-blendy.png 450w"} sizes="(max-width: 150px) 100vw, 150px"/>


                                                    @macarenapaz.xo
                                                    </div>
                                                    <p className="testimonial">
                                                        This was our first campaign with ABRAND and it won't be our last! A super-friendly user experience paired with dedicated staff to answer all our questions makes this our go-to for content creation. We loved the submissions we received and our engagement and conversions increased, which is exactly what we'd hoped for.
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="testimonial-slide brand">
                                                    <div className="control-image">

                                                        <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=800&amp;height=162&amp;name=brand-logo-accoladewine.png"} alt="accolade" width="800" height="162" loading="lazy" srcSet={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=400&amp;height=81&amp;name=brand-logo-accoladewine.png 400w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=800&amp;height=162&amp;name=brand-logo-accoladewine.png 800w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=1200&amp;height=243&amp;name=brand-logo-accoladewine.png 1200w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=1600&amp;height=324&amp;name=brand-logo-accoladewine.png 1600w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=2000&amp;height=405&amp;name=brand-logo-accoladewine.png 2000w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-accoladewine.png?width=2400&amp;height=486&amp;name=brand-logo-accoladewine.png 2400w"} sizes="(max-width: 800px) 100vw, 800px"/>
                                                    </div>
                                                    <div className="reviewer">
                                                        <div className="dp">


                                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=156&amp;height=156&amp;name=display-logo-accolade.png"} alt="accolade" width="156" height="156" loading="lazy" srcSet={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=78&amp;height=78&amp;name=display-logo-accolade.png 78w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=156&amp;height=156&amp;name=display-logo-accolade.png 156w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=234&amp;height=234&amp;name=display-logo-accolade.png 234w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=312&amp;height=312&amp;name=display-logo-accolade.png 312w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=390&amp;height=390&amp;name=display-logo-accolade.png 390w, https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-accolade.png?width=468&amp;height=468&amp;name=display-logo-accolade.png 468w"} sizes="(max-width: 156px) 100vw, 156px"/>

                                                        </div>
                                                        <div className="reviewer-info">
                                                            <span className="reviewer_name"> PRO </span>
                                                            <span className="reviewer_detail1"> Charlotte Norris </span>
                                                            <span className="reviewer_detail2"> Social Media Manager </span>
                                                        </div>
                                                    </div>
                                                    <div className="featured-image-wrapper">
                                                        <div className="featured-image">
                                                            <img className="featured-image-background" src={"assets/images/pricing/accolate-wines.jpg"} alt="accolade" width="630" height="630" loading="lazy"/>

                                                        </div>



                                                        <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-accolade.png?width=150&amp;height=150&amp;name=display-pic-accolade.png"} alt="accolade" width="150" height="150" loading="lazy"/>


                                                    @stanleydru
                                                    </div>
                                                    <p className="testimonial">
                                                        It is a joy working with ABRAND. Their platform provides a diverse and highly skilled pool of talent that we can ensure align with our brand and marketing objectives. By working this closely with influencers, we’ve been able to quickly deliver our highest performing and most cost effective campaigns to date.
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="testimonial-slide brand">
                                                    <div className="control-image">

                                                        <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-logitechh.png?width=800&amp;height=162&amp;name=brand-logo-logitechh.png"} alt="logitech" width="800" height="162" loading="lazy" />
                                                    </div>
                                                    <div className="reviewer">
                                                        <div className="dp">


                                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-logitechh.png?width=156&amp;height=156&amp;name=display-logo-logitechh.png"} alt="logitech" width="156" height="156" loading="lazy"/>

                                                        </div>
                                                        <div className="reviewer-info">
                                                            <span className="reviewer_name"> TEAMS </span>
                                                            <span className="reviewer_detail1"> Daniel Clayton </span>
                                                            <span className="reviewer_detail2"> Digital Marketing Manager - North West Europe </span>
                                                        </div>
                                                    </div>
                                                    <div className="featured-image-wrapper">
                                                        <div className="featured-image">
                                                            <img className="featured-image-background" src={"assets/images/pricing/pay-per-use.jpg"} alt="logitech" width="900" height="900" loading="lazy"/>

                                                        </div>



                                                        <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-logitech.png?width=150&amp;height=150&amp;name=display-pic-logitech.png"} alt="logitech" width="150" height="150" loading="lazy"/>


                                                    @iansangala
                                                    </div>
                                                    <p className="testimonial">
                                                        I used to find Influencer Marketing really hard work; it's time consuming with sporadic costings. Not since I’ve started working with ABRAND! Pricing is clear, I can be live in minutes, and scale is no issue; with thousands of your brand's fans available to create amazing content. Plus, they’re a sh*t hot group of people too!
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="testimonial-slide brand">
                                                    <div className="control-image">

                                                        <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/brand-logo-polkadotcommunications.png?width=800&amp;height=162&amp;name=brand-logo-polkadotcommunications.png"} alt="polkadot" width="800" height="162" loading="lazy"/>
                                                    </div>
                                                    <div className="reviewer">
                                                        <div className="dp">


                                                            <img src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-logo-polkadotcomm.png?width=156&amp;height=156&amp;name=display-logo-polkadotcomm.png"} alt="polkadot " width="156" height="156" loading="lazy"/>

                                                        </div>
                                                        <div className="reviewer-info">
                                                            <span className="reviewer_name"> ENTERPRISE </span>
                                                            <span className="reviewer_detail1"> Clare Goodhew </span>
                                                            <span className="reviewer_detail2"> Senior Account Executive </span>
                                                        </div>
                                                    </div>
                                                    <div className="featured-image-wrapper">
                                                        <div className="featured-image">


                                                            <img className="featured-image-background" src={"assets/images/pricing/team.jpg"} alt="polkadot" width="900" height="900" loading="lazy"/>

                                                        </div>
                                                        <img className="featured-image-dp" src={"https://www.tribegroup.co/hs-fs/hubfs/TRIBE-Website-2018-Assets/pricing/testimonials/display-pic-polkadot.png?width=150&amp;height=150&amp;name=display-pic-polkadot.png"} alt="polkadot" width="150" height="150" loading="lazy"/>


                                                    @aday_inthelifeof_us
                                                    </div>
                                                    <p className="testimonial">
                                                        Each time we have worked with ABRAND we have seen amazing results for our clients. The content developed by the Creators is beautiful and the team is always on hand to answer questions or guide you during a campaign. ABRAND is definitely top of mind for our team for anything and everything influencer related.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="testimonial-slider-control"></div>
                                    </div>
                                </section>
                                <section className="pricing-product-feature">
                                    <div className="copy inner-width-mobile inner-width">
                                        <h2>Product Features</h2>
                                        <p>

                                        </p>
                                    </div>
                                    <div className="copy-details inner-width-mobile inner-width">
                                        <span className="hs_cos_wrapper_widget_container">
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/influencer-campaigns.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Influencer Campaigns</h3>
                                                    <div className="description-text">
                                                        <p>100% vetted influencers submit photos and videos celebrating your brand. You approve the ones you love and they post it to their followers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <div className="image">
                                                            <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/content-library.png"} alt="influencer campaigns"/>
                                                        </div>
                                                    </div>
                                                    <h3>Content Campaigns</h3>
                                                    <p>ABRAND's premium Creators generate branded content that you license for use on your own advertising channels. Includes legals and perpetual rights.</p>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/facebook-integration.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Facebook Integration</h3>
                                                    <div className="description-text">
                                                        <p>Connect your brand’s Facebook account to push content from ABRAND straight to your Ads Manager, and synchronise insights & reporting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/branded-content-ads.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Branded Content Ads</h3>
                                                    <div className="description-text">
                                                        <p>Turn your organic influencer posts into paid ads that include precise audience targeting, click through attribution and insights delivered straight into your Ads Manager.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/reporting.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Advanced Reporting & Benchmarking</h3>
                                                    <div className="description-text">
                                                        <p>1st party data to track an individual post or aggregate campaign metrics, with reach, impressions and swipe up data. Downloadable to CSV.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/sentiment-analysis.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Sentiment Analysis</h3>
                                                    <div className="description-text">
                                                        <p>We apply AI Natural Language Processing to determine the audience sentiment and level of positivity to posts about your brand.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <div className="image">
                                                            <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/content-library.png"} alt="influencer campaigns"/>
                                                        </div>
                                                    </div>
                                                    <h3>Content Campaigns</h3>
                                                    <div className="description-text">
                                                        <p>ABRAND's premium Creators generate branded content that you license for use on your own advertising channels. Includes legals and perpetual rights.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/facebook-integration.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Facebook Integration</h3>
                                                    <div className="description-text">
                                                        <p>Connect your brand’s Facebook account to push content from ABRAND straight to your Ads Manager, and synchronise insights & reporting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/branded-content-ads.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Branded Content Ads</h3>
                                                    <div className="description-text">
                                                        <p>Turn your organic influencer posts into paid ads that include precise audience targeting, click through attribution and insights delivered straight into your Ads Manager.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/reporting.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Advanced Reporting & Benchmarking</h3>
                                                    <div className="description-text">
                                                        <p>1st party data to track an individual post or aggregate campaign metrics, with reach, impressions and swipe up data. Downloadable to CSV.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs_cos_wrapper_type_module">
                                                <div className="description-table small-image">
                                                    <div className="image">
                                                        <img src={"https://www.tribegroup.co/hubfs/TRIBE-Website-2018-Assets/pricing/sentiment-analysis.png"} alt="influencer campaigns"/>
                                                    </div>
                                                    <h3>Sentiment Analysis</h3>
                                                    <div className="description-text">
                                                        <p>We apply AI Natural Language Processing to determine the audience sentiment and level of positivity to posts about your brand.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </section>
                                <section className="pricing-bottom-section">
                                    <div className="copy inner-width-mobile inner-width">
                                        <h2>Instant branded content that performs</h2>
                                        <a href="#" className="cta-button primary-cta">REQUEST A DEMO</a>
                                    </div>
                                </section>
                            </div>
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
                                                                    <input id="option" className="hs-input " type="radio" name="option_choices" defaultValue="influencer" defaultChecked="" />
                                                                    <span>I'm a Creator</span>
                                                                </label>
                                                            </li>
                                                            <li className="hs-form-radio">
                                                                <label>
                                                                    <input id="option" className="hs-input " type="radio" name="option_choices" defaultValue="influencer" defaultChecked="" />
                                                                    <span>I'm a Brand</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="hs_email">
                                                    <div className="input">
                                                        <input id="email" className="hs-input" type="email" name="email" required="" placeholder="Email address*" defaultValue="" autoComplete="email" />
                                                        <button>
                                                            <span>SUBSCRIBE</span>
                                                            <span className="arrow-button"> <img src={"assets/images/right-arrow.svg"} alt="subscribe newsletter"/> </span>
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
                        <script src="assets/js/jquery.min.js"></script>
                        <script src="assets/js/bootstrap.min.js"></script>
                        <script src="assets/js/mobile-menu.js"></script>
                        <script src="assets/slick/slick.min.js"></script>
                        {/* <script src="https://github.hubspot.com/odometer/odometer.js"></script> */}
                        {/* <script src="assets/js/animated-counter.js"></script> */}
                        <script src="assets/js/main.js"></script>
                    </body>
                    )

    }

}

                    export default pricing
