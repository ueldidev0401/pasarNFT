import Link from 'next/link';

const BannerFour = () => {
    return(
        <section className="banner-section" style={{backgroundImage:"url('assets/images/banner/bg-1.jpg')"}}>
        <div className="container">
            <div className="banner-wrapper">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="banner-content text-center">
                            <h2>Discover, Collect
                                And Sell Extraordinary NFTs</h2>
                            <p className="mb-5">Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens.</p>
                            <div className="banner-btns d-flex flex-wrap justify-content-center">
                                <Link href="/signin">
                                <a className="default-btn move-right"><span>Create Store</span>
                                </a>
                                </Link>
                            </div>
                            <div className="banner-cat mt-70">
                                <div className="row g-4">
                                    <div className="col-lg-3 col-6">
                                        <div className="cat-item blured">
                                            <div className="cat-inner position-relative">
                                                <span className="badge bg-orange position-absolute">11.2k</span>
                                                <div className="cat-thumb">
                                                    <img src="assets/images/category/cat-1.png" alt="Category Image" />
                                                </div>
                                                <div className="cat-content">
                                                    <h6>
                                                    <Link href="/category">
                                                        <a>Art Work</a>
                                                    </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="cat-item blured">
                                            <div className="cat-inner position-relative">
                                                <span className="badge bg-blue position-absolute">39.3k</span>
                                                <div className="cat-thumb">
                                                    <img src="assets/images/category/cat-2.png" alt="Category Image" />
                                                </div>
                                                <div className="cat-content">
                                                    <h6>
                                                    <Link href="/category">
                                                        <a>Music</a>
                                                    </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="cat-item blured">
                                            <div className="cat-inner position-relative">
                                                <span className="badge bg-orange position-absolute">99.2k</span>
                                                <div className="cat-thumb">
                                                    <img src="assets/images/category/cat-3.png" alt="Category Image" />
                                                </div>
                                                <div className="cat-content">
                                                    <h6>
                                                    <Link href="/category">
                                                        <a>Utilities</a>
                                                    </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="cat-item blured">
                                            <div className="cat-inner position-relative">
                                                <span className="badge bg-blue position-absolute">101.2k</span>
                                                <div className="cat-thumb">
                                                    <img src="assets/images/category/cat-4.png" alt="Category Image" />
                                                </div>
                                                <div className="cat-content">
                                                    <h6>
                                                    <Link href="/category">
                                                        <a>Sports</a>
                                                    </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BannerFour