import React from 'react'

class signup extends React.Component {
    render() {
        return (
            <body>
                <main>
                    <div className="container">
                        <form id="inquery-form" action="" className="inquery-form">
                            <div className="form-group">
                                <div className="form-rich-text">
                                    <div className="logo">
                                        <img src={"assets/images/logo.png"} alt="logo"/>
                                        <h1 style={{"font-size": "10px;"}}><strong>Thank you for your interest in launching a Creator Coin with Abrand.We are currently invite-only so this application will help us figure out the best fit.</strong></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="source-input" className="source-input-label">How did you hear about Abrand?</label>
                                <select name="source" required="required" className="form-control form-field-input sources" aria-invalid="true" aria-required="true" placeholder="Please Select">
                                    <option lable="Please Select" value="" disabled selected>Please Select</option>
                                    <option lable="In the news" value="In the news">In the news</option>
                                    <option lable="From another creator" value="From another creator">From another creator</option>
                                    <option lable="In a Clubhouse event" value="In a Clubhouse event">In a Clubhouse event</option>
                                    <option lable="From the website" value="From the website">From the website</option>
                                    <option lable="other" value="other">other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="location" className="location-input">Where is your location of residence - list the tax/business location if you are using an entity (for the United States, please include the State)?</label>
                                <div className="location-description field-description">
                                    NOTE: Please be mindful of current restrictions for cash out depending on your location including the states of New York, Hawaii, and Louisiana. For a full list of current restricted jurisdictions, see <a href="#">here</a>.
                                </div>
                                <input id="location-input" className="form-control residence form-field-input" type="string" name="location" required="required" placeholder="" inputmode="text" aria-invalid="true" aria-required="true" value=""/>
                            </div>
                            <div className="form-group">
                                <label for="public-creator-name" className="public-creator-name-input">What's your Creator or public name?</label>
                                <input id="public-creator-name-input" className="form-control form-field-input creator-name" type="string" name="creator-name" required="required" placeholder="" inputmode="text" aria-invalid="true" aria-required="true" value=""/>
                            </div>
                            <div className="form-group">
                                <label for="email-input" className="email-input-label">What's your email address?</label>
                                <div className="email-description field-description">
                                    This should be the best email to contact you on, it does not have to be the email associated with your Abrand account.
                                </div>
                                <input className="form-control form-field-input email-input" id="email-input" type="string" name="email" required="required" placeholder="" inputmode="email" aria-invalid="true" aria-required="true" value=""/>
                            </div>

                            <div className="form-group">
                                <label for="main-social-plate-form-input" className="main-social-plate-form-label">What is your main social platform?</label>
                                <select name="social platform" id="main-social-plate-form-input" className="form-control form-field-input main-social-plate-form" required="required" aria-invalid="true" aria-required="true"><br/>
                                    <option lable="Please Select" value="Please Select" disabled selected>Please Select</option>
                                    <option lable="Twitch" value="Twitch">Twitch</option>
                                    <option lable="Twitter" value="Twitter">Twitter</option>
                                    <option lable="Youtube" value="Youtube">Youtube</option>
                                    <option lable="Discord" value="Discord">Discord</option>
                                    <option lable="Clubhouse" value="Clubhouse">Clubhouse</option>
                                    <option lable="Other" value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="vertical-input" className="vertical-label-input">Please select the content type that is most applicable to you:</label>
                                <div className="radio-button-group">
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Music"/>
                                            <span className ="radio_label-span">Music</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Gaming"/>
                                            <span className ="radio_label-span">Gaming</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Fine Art"/>
                                            <span className ="radio_label-span">Fine Art</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Sports"/>
                                            <span className ="radio_label-span">Sports</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Youtube"/>
                                            <span className ="radio_label-span">Youtube</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Tiktok"/>
                                            <span className ="radio_label-span">Tiktok</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Entertainment"/>
                                            <span className ="radio_label-span">Entertainment</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Podcast / social audio"/>
                                            <span className ="radio_label-span">Podcast / social audio</span>
                                        </label>
                                    </div>
                                    <div className="radio-button">
                                        <label id="vertical-label" className="radio_label">
                                            <input type="radio" className="form-control vertical-input" id="vertical-input" name="vertical-input" required="required" placeholder="" value="Instagram"/>
                                            <span className ="radio_label-span">Instagram</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="total-audience-size-input" className="total-audience-size">About how large is your audience across all your social media platforms?</label>
                                <select name="total-audience-size" className="form-control form-field-input total-audience-size-input" required="required" aria-invalid="true" aria-required="true"><br/>
                                    <option lable="Please Select" value="" disabled selected="selected">Please Select</option>
                                    <option lable="0-5K" value="0-5K" >0-5K</option>
                                    <option lable="5-50K" value="5-50K">5-50K</option>
                                    <option lable="50-250K" value="50-250K">50-250K</option>
                                    <option lable="250-500K" value="250-500K">250-500K</option>
                                    <option lable="500K-1M" value="500K-1M">500K-1M</option>
                                    <option lable="1M+" value="1M+">1M+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="social_media_links-input" className="social_media_links">Please provide links to your relevant social media accounts.</label>
                                <textarea className="form-control form-field-input social_media_links-input" name="social_media_links" description="" required="required" placeholder="" aria-invalid="true" aria-required="true"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="creator-coin-name-symbol-input" className="creator-coin-name-symbol">What would you name your Creator Coin? What 3-5 alphanumeric characters will comprise your ticker?</label>
                                <div className="creator-coin-name-symbol-description field-description">
                                    Your Creator Coin name should be something that is easy for your Fans to identify as you. Your ticker should be 3-5 characters, all upper case. This begins with the $ symbol.
                                </div>
                                <input className="form-control form-field-input creator-coin-name-symbol-input" type="string" name="creator-coin-name-symbol" required="required" placeholder="" inputmode="text" aria-invalid="true" aria-required="true" value=""/>
                            </div>
                            <div className="form-group">
                                <label for="use_cases-input" className="use_cases">What perks will your audience receive for buying your coin?</label>
                                <textarea className="form-control form-field-input use_cases-input" name="use_cases" description="" required="required" placeholder="" aria-invalid="true" aria-required="true"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="use_case_hold-input" className="use_case_hold">What perks/access will your audience receive for holding your coin? </label>
                                <textarea className="form-control form-field-input use_case_hold-input" name="use_case_hold" description="" required="required" placeholder="" aria-invalid="true" aria-required="true"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="use_case_spend-input" className="use_case_spend">What events, services, activities and goods will you offer for your Coin? </label>
                                <textarea className="form-control form-field-input use_case_spend-input" name="use_case_spend" description="" required="required" placeholder="" aria-invalid="true" aria-required="true"></textarea>
                            </div>
                            <div className="form-group"></div>
                            <div className="form_actions">
                                <button type="submit" className="form_actions_submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        )
    }

}
export default signup
