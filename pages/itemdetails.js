import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal, Button } from 'react-bootstrap';
import TimerTwo from "../components/common/TimerTwo";
import PageHeader from '../components/PageHaeder';


const PageHeaderText =
{
    "linkText": "Home",
    "heading": "Item Details"
};

const ItemInfo =
{
    "id": 1,
    "image": "assets/images/nft-item/item-details.gif",
    "description": "This is the second batch of Cybertino Genesis NFTs for early adopters and is 1 of 5. This Genesis NFT will be interactive: hold and wait for future exclusive benefits and early access to new drops!",
    "wishlist": "1.3",
    "expiredate": "2022-06-26",
    "title": "Dodo je Aliener Walk",
    "stock": "12",
    "price": "2.29",
    "size": "1000 x 1000 px.VIDEO (19.85MB)",
    "createdBy": "@alex joe",
    "listedBy": "@alex joe",
    "owners": [
        {
            "id": "1",
            "name": "Alex joe",
            "contactAddress": "0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec",
            "token": "0005515456416",
            "blockchain": "Ethereum (ETH)",
            "image": "assets/images/seller/collector-3.gif",
            "verified": true,
            "prfileLink": "/"
        }, {
            "id": "2",
            "name": "Alex joe",
            "contactAddress": "0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec",
            "token": "0005515456416",
            "blockchain": "Ethereum (ETH)",
            "image": "assets/images/seller/collector-3.gif",
            "verified": true,
            "prfileLink": "/"
        }
    ],
    "history": [
        {

        }
    ]
};

const ItemDetails = () => {
    const [buyModalShow, setBuyModalShow] = useState(false);
    const [bidModalShow, setBidModalShow] = useState(false);

    const openBuyModal = () => {
        setBuyModalShow(true)
    }
    const openBidModal = () => {
        setBidModalShow(true)
    }

    return (
        <div>
            <PageHeader text={PageHeaderText} />
            <div className="item-details-section padding-top padding-bottom">
                <div className="container">
                    <div className="item-details-wrapper">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="item-desc-part">
                                    <div className="item-desc-inner">
                                        <div className="item-desc-thumb">
                                            <img src={`${ItemInfo.image}`} alt="item-img" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item-buy-part">
                                    <div className="nft-detail">
                                        <h3 className="title">Abstact Smoke Red Blue</h3>
                                        <p className="from">From 4.5ETH - 20 of 25 available</p>
                                        <div className="author-profile d-flex flex-wrap align-items-center gap-15">
                                            <div className="author-p-thumb">
                                                <Link href="/author">
                                                    <a className="author-wrap">
                                                        <p className="author-c">Creator</p>
                                                        <img className="author-avatar" src="assets/images/seller/collector-3.gif" alt="author-img " />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="author-p-info">
                                                <h6>
                                                    <Link href="/author"><a>{`${ItemInfo.owners[0].name}`}</a></Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="item-desc-content">
                                                <nav>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav-details" type="button" role="tab"
                                                            aria-controls="nav-details" aria-selected="true">Details</button>
                                                        <button className="nav-link" id="nav-bids-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav-bids" type="button" role="tab"
                                                            aria-controls="nav-bids" aria-selected="false">Offers</button>
                                                        <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav-history" type="button" role="tab"
                                                            aria-controls="nav-history" aria-selected="false">History</button>
                                                    </div>
                                                </nav>
                                                <div className="tab-content" id="nav-tabContent">
                                                    <div className="details-tab tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">

                                                        <p className="table-c">{`${ItemInfo.description}`}</p>

                                                    </div>
                                                    <div className="bids-tab tab-pane fade" id="nav-bids" role="tabpanel" aria-labelledby="nav-bids-tab">
                                                        <div className="row">
                                                            <div className="col-md-4 table-h">Name</div>
                                                            <div className="col-md-4 table-h">Offer</div>
                                                            <div className="col-md-4 table-h">Date</div>
                                                        </div>
                                                        <div className="row asix-mt-5">
                                                            <div className="col-md-4 table-c">David</div>
                                                            <div className="col-md-4 table-c">2.10ETH</div>
                                                            <div className="col-md-4 table-c">21st May 2021</div>
                                                        </div>
                                                    </div>
                                                    <div className="history-tab tab-pane fade" id="nav-history" role="tabpanel"
                                                        aria-labelledby="nav-history-tab">
                                                        <div className="row">
                                                            <div className="col-md-4 table-h">Name</div>
                                                            <div className="col-md-4 table-h">Offer</div>
                                                            <div className="col-md-4 table-h">Date</div>
                                                        </div>
                                                        <div className="row asix-mt-5">
                                                            <div className="col-md-4 table-c">David</div>
                                                            <div className="col-md-4 table-c">2.10ETH</div>
                                                            <div className="col-md-4 table-c">21st May 2021</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="share-btn">
                                            <div className=" dropstart">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buying-btns ">
                                        <a className="asix-pink-fill-btn" onClick={openBuyModal}>Buy for 4.5 ETH</a>

                                        <a className="asix-pink-outline-btn asix-ml-20" onClick={openBidModal} ><span>Make Offer</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={buyModalShow}
                onHide={() => setBuyModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <div className="container asix-padding-20">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="asix-item-bid-title">Check out</p>
                        </div>
                        <div className="col-md-12">
                            <p>You are about to purchase a xxx from YYY </p>
                        </div>
                        <div className='col-md-12'>
                            <div className="item-name-field mb-3">
                                <label className='asix-input-item-name asix-bid-info'>Enter quantity</label>
                                <input type="number" min={1} className="form-control input-item asix-input" placeholder="1" />
                            </div>
                        </div>
                        <div className="asix-gap-t"></div>
                        <div className='col-md-12'>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">Your balance</p>
                                <p className="asix-bid-info">12.66 ASIX</p>
                            </div>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">Service fee 2.5%</p>
                                <p className="asix-bid-info">0.0045 ASIX</p>
                            </div>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">You will pay</p>
                                <p className="asix-bid-info">0.0855 ASIX</p>
                            </div>
                            <div className="">
                                <a className="asix-pink-fill-btn asix-w-full">Add funds</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                show={bidModalShow}
                onHide={() => setBidModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="container asix-padding-20">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="asix-item-bid-title">Place a bid</p>
                        </div>
                        <div className="col-md-12">
                            <p>You are about to purchase a xxx from YYY </p>
                        </div>
                        <div className='col-md-12'>
                            <div className="item-name-field mb-3">
                                <label className='asix-input-item-name asix-bid-info'>Your bid(ASIX)</label>
                                <input type="number" min={1} step={0.0001} className="form-control input-item asix-input" placeholder="1" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="item-name-field mb-3">
                                <label className='asix-input-item-name asix-bid-info'>Enter quantity</label>
                                <input type="number" min={1} className="form-control input-item asix-input" placeholder="1" />
                            </div>
                        </div>
                        <div className="asix-gap-t"></div>
                        <div className='col-md-12'>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">Your bidding balance</p>
                                <p className="asix-bid-info">12.66 ASIX</p>
                            </div>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">Your balace</p>
                                <p className="asix-bid-info">12.66 ASIX</p>
                            </div>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">Service fee 2.5%</p>
                                <p className="asix-bid-info">0.0045 ASIX</p>
                            </div>
                            <div className="asix-flex asix-space-between">
                                <p className="asix-bid-info">You will pay</p>
                                <p className="asix-bid-info">0.0855 ASIX</p>
                            </div>
                            <div className="">
                                <a className="asix-pink-fill-btn asix-w-full">Place a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ItemDetails;