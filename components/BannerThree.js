import { Swiper, SwiperSlide } from 'swiper/react';
import Products from '../data/Product/Products.json';
import ProductSingle from "./common/ProductSingle";
import Link from 'next/link';

var productList = Products.slice(12,14);

const BannerThree = () => {
    return (

        <section className="banner-section" style={{backgroundImage:"url('assets/images/banner/bg-1.jpg')"}}>
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="banner-content">
                                <h1 className="mb-3"><span className="gradient-text-orange">Discover</span> , Trade, collect, and
                                    sell
                                    <span className="gradient-text-orange"> NFTs</span>
                                </h1>
                                <p className="mb-5">Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens.
                                    Buy, Sell, And Discover Exclusive Digital Assets.</p>
                                <div className="banner-btns d-flex flex-wrap">
                                    <Link href="/explore">
                                        <a className="default-btn move-top"><span>Explore</span> </a>
                                    </Link>
                                    <Link href="/signin">
                                        <a className="default-btn move-right"><span>Create</span> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="swiper banner-slider">
                                <div className="swiper-wrapper">
                                <Swiper
                                slidesPerView={1}
                                >
                                {
                                    productList.map((item) => (
                                        <SwiperSlide key={item.id}>
                                        <div className="swiper-slide">

                                            <ProductSingle key={item.id} data={item} />
                                        </div>
                                        </SwiperSlide>
                                    ))
                                }
                                
                                </Swiper>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerThree