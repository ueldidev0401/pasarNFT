import Link from 'next/link';

const AuthorCard = ({item}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="nft-item style-2">
                <div className="nft-inner">
                    <div className="nft-thumb">
                        <img loading="lazy" src={`${item.thumbnail}`} alt="nft-img" />
                    </div>
                    <div className="nft-content">
                        <div className="author-thumb">
                            <Link href="/author">
                            <a className="veryfied"><img loading="lazy"
                                    src={`${item.image}`} alt="author-img" /></a>
                            </Link>
                        </div>
                        <div className="author-details">
                            <h5>
                            <Link href="/author">
                                <a>{`${item.name}`}</a>
                            </Link>
                            </h5>
                            <p className="nft-price yellow-color">${`${item.sales}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard;