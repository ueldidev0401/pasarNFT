import { useState } from "react";
import React from 'react';
import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingleExplorer from "../components/common/ProductSingleExplorer";
import Link from 'next/link';
import Stacking from "../components/Stacking";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import { InputGroup, FormControl } from "react-bootstrap";

var productList = Products.slice(0, 12);

const PageHeaderText =
{
    "heading": "Wallet",
    "subText": ""
};

const My_wallet = () => {
    const [showProducts, setshowProducts] = useState(productList);
    const swiperRef = React.useRef(null);
    const md = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const sm = useMediaQuery({
        query: '(min-width: 400px)'
    })
    const xs = useMediaQuery({
        query: '(min-width: 400px)'
    })

    const getProductsByCategory = (category) => {
        if (category != 'All') {
            var productListFiltered = Products.filter((item) => item.category == category);
            setshowProducts(productListFiltered);
        } else {
            setshowProducts(productList);

        }

    }

    return (
        <div>
            <PageHeader text={PageHeaderText} />
            <section className="explore-section explore-page padding-top padding-bottom">
                <div className="container-fluid asix-padding">
                    <div className="row total-balance">
                        <div className="col-sm-8 col-md-6 col-lg-4 asix-gap-1">
                            <div className="asix-card balance-card">
                                <p>Total Wallet Balance</p>
                                <div className="wallet-balance-wrap">
                                    <img src="assets/images/asix/wallet/wallet.png" alt="" />
                                    <p className="balance-value">150ETH = <span>$10,000</span></p>
                                </div>
                                <div className="fund-wallet">
                                    <p>Fund Wallet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-6 col-lg-8"></div>
                        <div className="col-md-4  asix-gap-1">
                            <div className="asix-card just-center">
                                <div className="content-fit">
                                    <div className="wallet-balance-wrap">
                                        <img src="assets/images/asix/wallet/listen.png" alt="" />
                                        <p className="balance-value">Listen to Earn</p>
                                    </div>
                                    <div className="fund-wallet">
                                        <p>Fund Wallet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 asix-gap-1">
                            <div className="asix-card just-center">
                                <div className="content-fit">
                                    <div className="wallet-balance-wrap">
                                        <img src="assets/images/asix/wallet/promote.png" alt="" />
                                        <p className="balance-value">Stream to Earn</p>
                                    </div>
                                    <div className="fund-wallet">
                                        <p>Fund Wallet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 asix-gap-1">
                            <div className="asix-card just-center">
                                <div className="content-fit">
                                    <div className="wallet-balance-wrap">
                                        <img src="assets/images/asix/wallet/crowd.png" alt="" />
                                        <p className="balance-value">Crowd Funding</p>
                                    </div>
                                    <div className="fund-wallet">
                                        <p>Fund Wallet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Stacking />
                    </div>
                    <div className="row collectable">
                        <section className="auction-section asix-pt-0">
                            <div className="container-fluid asix-padding-zero">
                                <div className="section-header">
                                    <h3 className="header-title">Collectables</h3>
                                    <div className="header-content">
                                        <Link href="/explore">
                                            <a className="default-btn  asix-btn small-btn move-right">
                                                <span>View All</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section-wrapper">
                                    <div className="col-lg-12">
                                        <Swiper
                                            spaceBetween={20}
                                            slidesPerView={md ? 4 : sm ? 3 : 1}
                                            ref={swiperRef}
                                        >
                                            {
                                                showProducts.map((item) => (

                                                    <SwiperSlide key={item.id}>
                                                        <div className="swiper-slide">
                                                            <ProductSingleExplorer data={item} style={{ marginRight: '15px', marginBottom: '15px' }} key={item.id} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>

                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="row collectable history">
                        <section className="auction-section asix-pt-0">
                            <div className="container-fluid asix-padding-zero">
                                <div className="section-header">
                                    <h3 className="header-title">Validation History</h3>
                                    <div className="header-content">
                                        <Link href="/explore">
                                            <a className="default-btn  asix-btn small-btn move-right">
                                                <span>View All</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section-wrapper history-section">
                                    <div className="row asix-over">
                                        <div className="col-md-12 asix-flex-between history-min-w">
                                            <div className="asix-flex">
                                                <InputGroup className="mb-3 search-history">
                                                    <InputGroup.Text><img src="assets/images/asix/history/search.png" alt="" /></InputGroup.Text>
                                                    <FormControl placeholder="Search for..." />
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Music" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/music.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Creator" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/creator.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Status" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/status.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Typpe" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/type.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                            <div className="asix-flex">
                                                <div> 
                                                </div> 
                                                <div className="sort">
                                                    <select className="form-select input-item history-sort">
                                                        <option>
                                                            Sort By
                                                        </option>
                                                        <option value="1">
                                                            BitCoin
                                                        </option>
                                                        <option value="2">Dollar
                                                        </option>
                                                        <option value="3">Pound
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div> 
                                        <div className="col-lg-12 asix-flex table-h history-min-w">
                                            <div className="h-t-name h-center table-font">Name</div>
                                            <div className="h-t-des h-center table-font">Description</div>
                                            <div className="h-t-price h-center table-font">Price</div>
                                            <div className="h-t-status h-center table-font">Status</div>
                                            <div className="h-t-period h-center table-font">Period</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-pink"/>Done</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-grey"/>Pending</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-red"/>Declined</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="row collectable">
                        <section className="auction-section asix-pt-0">
                            <div className="container-fluid asix-padding-zero">
                                <div className="section-header">
                                    <h3 className="header-title">Transcations</h3>
                                    <div className="header-content">
                                        <Link href="/explore">
                                            <a className="default-btn  asix-btn small-btn move-right">
                                                <span>View All</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section-wrapper history-section">
                                    <div className="row asix-over">
                                        <div className="col-md-12 asix-flex-between history-min-w">
                                            <div className="asix-flex">
                                                <InputGroup className="mb-3 search-history">
                                                    <InputGroup.Text><img src="assets/images/asix/history/search.png" alt="" /></InputGroup.Text>
                                                    <FormControl placeholder="Search for..." />
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Music" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/music.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Creator" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/creator.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Status" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/status.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                                <InputGroup className="mb-3 search-field">
                                                    <FormControl placeholder="Typpe" />
                                                    <InputGroup.Text><img src="assets/images/asix/history/type.png" alt="" /></InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                            <div className="asix-flex">
                                                <div> 
                                                </div> 
                                                <div className="sort">
                                                    <select className="form-select input-item history-sort">
                                                        <option>
                                                            Sort By
                                                        </option>
                                                        <option value="1">
                                                            BitCoin
                                                        </option>
                                                        <option value="2">Dollar
                                                        </option>
                                                        <option value="3">Pound
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div> 
                                        <div className="col-lg-12 asix-flex table-h history-min-w">
                                            <div className="h-t-name h-center table-font">Name</div>
                                            <div className="h-t-des h-center table-font">Description</div>
                                            <div className="h-t-price h-center table-font">Price</div>
                                            <div className="h-t-status h-center table-font">Status</div>
                                            <div className="h-t-period h-center table-font">Period</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-pink"/>Done</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-grey"/>Pending</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                        <div className="col-lg-12 asix-flex table-b history-min-w">
                                            <div className="h-t-name h-center table-font"><img className="t-avatar" src="assets/images/asix/avatar-doli.png" alt=""/>Omini Mosquitoes</div>
                                            <div className="h-t-des h-center table-font">Lorem ipsum dolor sit</div>
                                            <div className="h-t-price h-center table-font">1.00 ETH</div>
                                            <div className="h-t-status h-center table-font"><div className="status-poly-red"/>Declined</div>
                                            <div className="h-t-period h-center table-font">12th March 2022</div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default My_wallet;