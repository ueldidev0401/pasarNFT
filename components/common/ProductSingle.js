import OwnerList from "./OwnerList";
import Timer from './Timer';
import Link from 'next/link';




const ProductSingle = ({ data, countdown = false, style }) => {

    return (
        <div className="nft-item" style={style}>
            <div className="nft-inner"> 
                <div className="nft-item-top d-flex justify-content-between align-items-center"> 
                </div> 
                <div className="nft-item-bottom"> 
                    <div className="nft-thumb">
                        <img src={`${data.image}`} alt="nft-img" />
                        {countdown == true ? (<Timer data={data} />) : ''} 
                    </div>
                    <div className="nft-content">
                        <div className="content-title d-flex flex-wrap justify-content-between">
                            <h5>
                                <Link href="/itemdetails">
                                    <a className="nft-name">{`${data.title}`}</a>
                                </Link>
                            </h5>
                            <Link href="/itemdetails">
                                <a className="nft-bid">Place Bid</a>
                            </Link>
                        </div>

                        {/* <div
                            className="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                            <span className="nft-view">
                                <Link href="/activity">
                                <a><i
                                className="icofont-eye-alt"></i> View
                                History</a> 
                                </Link>
                                
                                </span>
                            <div className="nft-stock"> {`${data.stock}`} in Stock</div>
                        </div> */}
                        <div className="price-like d-flex justify-content-between align-items-center">
                            <div className="nft-price d-flex align-items-center">
                                <span className="currency-img">
                                    <img src='assets/images/currency/currency-3.png'
                                        alt="currency img" />
                                </span>
                                <p className="nft-price">{`${data.price}`} ETH
                                </p>
                            </div>
                            <div className="nft-thumb">
                                <span className="badge rounded-pill position-absolute"><i
                                    className="icofont-heart"></i>
                                    {`${data.wishlist}`}k</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSingle;