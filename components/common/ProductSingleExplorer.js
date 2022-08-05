import OwnerList from "./OwnerList";
import Timer from './Timer';
import Link from 'next/link';

const ProductSingleExplorer = ({ data, countdown = false, style }) => {

    return (
        <div className="nft-item" style={style}>
            <div className="nft-inner">
                <div className="nft-item-top d-flex justify-content-between align-items-center nft-content">
                    <Link href="/itemdetails">
                        <a className="asix-gery-fill-btn">Place Bid</a>
                    </Link>
                    <p className="nft-price asix-m-0">{`${data.price}`} ETH </p>
                    <div className="nft-thumb">
                        <span className="badge rounded-pill"><i
                            className="icofont-heart"></i>
                            {`${data.wishlist}`}k</span>
                    </div>
                </div>
                <div className="nft-item-bottom">
                    <div className="nft-thumb">
                        <img src={`${data.image}`} alt="nft-img" />
                        {countdown == true ? (<Timer data={data} />) : ''}
                        <div className="explorer-avatar-wrap">
                            <img className="explorer-avatar" src={data.image} alt="asix-nft" />
                            <div className="avatar-name">
                                <p>Omni Mosquitoes</p>
                                <img className="verify" src="assets/images/asix/verified.png" alt="" />
                            </div>
                            <p className="by">by <span className="by-name">OrangeComet</span></p>
                            <p className="link">
                                See our [Scott Kelly Auction featuring real-world artifacts here] 
                                <Link href="/">
                                     <span className="url"> (https://opensea.io/collection/...</span>
                                </Link>
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ProductSingleExplorer;