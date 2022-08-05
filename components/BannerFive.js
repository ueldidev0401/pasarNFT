const BannerFive = () => {
    return (
        <section className="banner-section style-1" style={{backgroundImage:"url('assets/images/banner/bg.jpg')"}}>
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <div className="banner-content text-center">
                                <h2 className="mb-5">Discover, Collect
                                    And Sell Extraordinary NFTs</h2>

                                <div className="search-bar input-group mb-4">
                                    <input type="text" className="form-control" placeholder="Search NFT..."
                                        aria-label="Search our help center" aria-describedby="help-search" />
                                    <button className="btn btn-outline-secondary" type="button" id="help-search"><i
                                            className="icofont-search-1"></i></button>
                                </div>
                                <p>Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerFive