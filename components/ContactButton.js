const ContactButton = () =>{
    return(
        <div className="cant-find padding-bottom padding-top">
            <div className="container">
                <div className="cant-find-content text-center">
                    <h3 className="mb-3">Not finding what you are looking for?</h3>
                    <p>Chat with us or send us an email.</p>
                    <ul className="mt-4 d-flex flex-wrap justify-content-center align-items-center">
                        <li><a href="#"><span><i className="icofont-ui-messaging"></i></span> Chat With Us</a></li>
                        <li><a href="#"><span><i className="icofont-envelope"></i></span> Email Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default ContactButton;