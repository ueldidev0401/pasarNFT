const ContactForm = () => {
    return (
        <article className="contact-form-wrapper">
            <div className="contact-form">
                <h4>Do not Be A Stranger Just Say Hello.</h4>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                    alias sint! Velit suscipit alias totam repellendus enim, vero architecto harum
                    maiores aut mollitia nulla eos error. </p>

                <form className="comment-form" id="contact-form">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="contactName"
                                    placeholder="Name" />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="inputSub"
                                    placeholder="Subject" />
                                <label>Subject</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="contactNumber"
                                    placeholder="Number" />
                                <label>Number</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Message"
                                    id="msgBox"></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                    </div>





                    <button type="button" className="default-btn move-right">
                        <span>Send Message</span>
                    </button>
                    <p className="form-message mb-0"></p>
                </form>
            </div>
        </article>
    )
}

export default ContactForm;