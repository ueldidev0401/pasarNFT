const ContactInfo = () => {
    return (
        <aside className="contact-info-wrapper">
            <div className="contact-info-title">
                <h4>Get Information</h4>
                <p>Our Contact information Details and
                    Follow us on social media</p>
            </div>
            <div className="contact-info-content">
                <div className="contact-info-item">
                    <div className="contact-info-inner">
                        <div className="contact-info-thumb">
                            <img src="assets/images/contact/01.png" alt="address" />
                        </div>
                        <div className="contact-info-details">
                            <span className="fw-bold">Office Address</span>
                            <p>1201 park street, 5th Avenue</p>
                        </div>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-info-inner">
                        <div className="contact-info-thumb">
                            <img src="assets/images/contact/02.png" alt="address" />
                        </div>
                        <div className="contact-info-details">
                            <span className="fw-bold">Phone Number</span>
                            <p>+22698 745 632,02 982 745</p>
                        </div>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-info-inner">
                        <div className="contact-info-thumb">
                            <img src="assets/images/contact/03.png" alt="address" />
                        </div>
                        <div className="contact-info-details">
                            <span className="fw-bold">Send Mail</span>
                            <p>example@yourmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-info-inner">
                        <div className="contact-info-thumb">
                            <img src="assets/images/contact/04.png" alt="address" />
                        </div>
                        <div className="contact-info-details">
                            <span className="fw-bold">Our Website</span>
                            <p>www.example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ContactInfo;