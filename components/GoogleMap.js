const GoogleMap = () => {
    return (
        <div className="location-map">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228225.89119998863!2d-82.1359357856101!3d26.64753629985287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db44a7e78016f5%3A0xafd1a4163a9b6ff2!2sCape%20Coral%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1616562014411!5m2!1sen!2sbd"
                    allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default GoogleMap;