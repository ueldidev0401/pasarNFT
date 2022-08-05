import Link from 'next/link';
const Footer = () => {
    return (
        <div className="asix-foot">
            <footer className="footer-section">
                <div className="footer-top" >
                    <div className="footer-newsletter">
                        <div className="container-fluid asix-padding-foot">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="newsletter-part">
                                        <div>
                                            <img className="asix-foot-logo" src="assets/images/logo/logo-dark.png" alt="asix-logo" />
                                        </div>
                                        <div className="ft-header asix-foot-header">
                                            <h4>Get The Latest Anftiz Updates</h4>
                                        </div>
                                        <form action="#" className="asix-mail-box">
                                            <input type="email" placeholder="Your Mail Address" />
                                            <button type="submit" className="email-btn">Email Me!</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="footer-link-item">
                                                <h5>Pasar NFT</h5>
                                                <ul className="footer-link-list">
                                                    <li><a href="#" className="footer-link">Explore</a></li>
                                                    <li><a href="#" className="footer-link">How it works</a></li>
                                                    <li><a href="#" className="footer-link">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="footer-link-item">
                                                <h5>Support</h5>
                                                <ul className="footer-link-list">
                                                    <li><a href="#" className="footer-link">Help center</a></li>
                                                    <li><a href="#" className="footer-link">Term of service</a></li>
                                                    <li><a href="#" className="footer-link">Legal</a></li>
                                                    <li><a href="#" className="footer-link">Privacy policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="container-fluid asix-padding-foot asix-footer-bottom">
                        <div className="row">
                            <div className="col-md-6 asix-copyright">
                                <p className="asix-normal-text">
                                    PasarNft, Inc. All rights reserved
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="asix-social-wrap">
                                    <a href="#">
                                        <img className="asix-sc-btn" src="assets/images/asix/social/instagram.png" alt="instagram" />
                                    </a>
                                    <a href="#">
                                        <img className="asix-sc-btn" src="assets/images/asix/social/twitter.png" alt="twitter" />
                                    </a>
                                    <a href="#">
                                        <img className="asix-sc-btn" src="assets/images/asix/social/telegram.png" alt="telegram" />
                                    </a>
                                    <a href="#">
                                        <img className="asix-sc-btn" src="assets/images/asix/social/discord.png" alt="discord" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className="scrollToTop"><i className="icofont-swoosh-up"></i></a>
        </div>
    )
}

export default Footer