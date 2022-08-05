import Link from 'next/link';

const BlogItem = ({ item }) => {
    return (
        <div className="col-sm-6">
            <div className="nft-item blog-item">
                <div className="nft-inner">
                    <div className="nft-thumb">
                        <Link href="/blogsingle">
                            <img src={`${item.image}`} alt="blog-img" />
                        </Link>
                    </div>
                    <div className="nft-content">
                        <div className="author-details">
                            <h4>
                                <Link href="/blogsingle">
                                    <a>{`${item.title}`}</a>
                                </Link>
                            </h4>
                            <div className="meta-info">
                                <p><span><i className="icofont-ui-calendar"
                                    data-blast="color"></i></span>{`${item.postDate}`}
                                </p>
                                <p><span><i className="icofont-user"
                                    data-blast="color"></i></span>{`${item.postBy}`}
                                </p>
                            </div>
                            <Link href="/blogsingle">
                                <a
                                    className="default-btn move-right small-btn"><span>Read
                                        More</span> </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;