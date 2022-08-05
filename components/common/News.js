import Link from 'next/link';

const News = ({ data }) => {
    return (
        <div className="col-sm-12 col-md-6">
            <div className="nft-item blog-item">
                <div className="nft-inner asix-flex asix-news-item row">
                    <div className="nft-thumb col-md-6">
                        <Link href="/blogsingle">
                            <img src={`${data.image}`} alt="blog-img" />
                        </Link>
                    </div>
                    <div className="nft-content col-md-6">
                        <div className="author-details asix-author">
                            <h4>
                                <Link href="/blogsingle">
                                    <a >{`${data.title}`}</a>
                                </Link>
                            </h4>
                            <div className="meta-info asix-meta">
                                <p><span><i className="icofont-ui-calendar"
                                    data-blast="color"></i></span>{`${data.date}`}
                                </p>
                                <span>|</span>
                                <p><span><i className="icofont-user" data-blast="color"></i></span>{`${data.author}`}
                                </p>
                            </div>
                            {/* <div className="header-content">
                                <Link href="/blogsingle">
                                    <a className="default-btn  asix-btn small-btn move-right">
                                        <span>Read More</span>
                                    </a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News