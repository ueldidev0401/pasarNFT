import Link from 'next/link';

const Collector = ({ data, count, countShow = true, columnSize = "col-xl-3 col-lg-6" }) => {
    return (
        <div className={columnSize}>
            <div className="seller-item">
                <p className="collector-number assets-number">{countShow ? count + 1 : ''}</p>
                <div className="seller-inner">

                    <div className="seller-part">

                        <div className="assets-owner">
                            <div className="owner-thumb veryfied">
                                <Link href="/author">
                                    <a className=""><img
                                        src={`${data.image}`} alt="seller-img" /></a>
                                </Link>
                            </div>
                            <div className="owner-content">
                                <h6>
                                    <Link href="/author">
                                        <a>{`${data.name}`}</a>
                                    </Link>
                                </h6>
                                <p className="nft-price">{`${data.collected}`} ETH</p>
                            </div>
                        </div>
                    </div>

                    <span className={`${data.increament > 0 ? 'badge asix-round asix-btn-padding bg-orange' : 'badge asix-btn-padding asix-round bg-orange'}`}>{`${data.increament}`}%</span>
                </div>
            </div>
        </div>
    )
}

export default Collector