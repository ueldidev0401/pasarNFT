import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Products from '../data/Product/Products.json'
import ProductSingle from "./common/ProductSingle";
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';

var productList = Products.slice(0, 5);

SwiperCore.use([Navigation]);


const Stacking = () => {
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

    return (
        <div className='stacking-section'>
            <section className="auction-section asix-pt-0">
                <div className="container-fluid asix-padding-zero">
                    <div className="section-header">
                        <h3 className="header-title">Stacking</h3>
                        <div className="header-content"> 
                            <Link href="/explore">
                                <a className="default-btn  asix-btn small-btn move-right">
                                    <span>View All</span>
                                </a>
                            </Link>
                        </div> 
                    </div>
                    <div className="section-wrapper">
                        <div className="auction-holder">  
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={md?4:sm?3:1} 
                                ref={swiperRef}
                            > 
                                {
                                    productList.map((item) => (

                                        <SwiperSlide key={item.id}> 
                                            <div className="swiper-slide">
                                                <ProductSingle key={item.id} data={item} countdown={true} />
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
    )
}

export default Stacking