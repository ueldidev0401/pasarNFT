import { useState } from "react";
import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingle from "../components/common/ProductSingle";

var productList = Products.slice(0,12);

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"NFT's Live Auction"
};

const Auction = () => {
    const [showProducts,setshowProducts] = useState(productList);

    const productSearch = (keyword) => {
        if (keyword != '') {
            var productListFiltered = Products.filter((item) => {
                var productTitle = item.title.toLowerCase();
                var searchkeyword =keyword.toLowerCase();
                return productTitle.includes(searchkeyword);

            });
            setshowProducts(productListFiltered);
        }else {
            setshowProducts(productList);

        }

        
        
    }

    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="explore-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header">
                <div className="nft-filter d-flex flex-wrap align-items-center justify-content-center  gap-15">
                    <h3>Live Auctions</h3>
                </div>
                <div className="nft-search">
                    <div className="form-floating nft-search-input">
                        <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT" onChange={(event) => productSearch(event.target.value)} />
                        <label>Search NFT</label>
                        <button type="button"> <i className="icofont-search-1"></i></button>
                    </div>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="explore-wrapper auction-loadmore">
                    <div className="row g-4">


                        {
                            showProducts.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                <ProductSingle data={item}  />
                                </div>
                            ))
                        }
                        
                        
                        

                    </div>

                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Auction;