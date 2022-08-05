import { useState } from "react";
import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingleExplorer from "../components/common/ProductSingleExplorer";
import Link from 'next/link';

var productList = Products.slice(0, 12);

const PageHeaderText =
{
    "heading": "Explore Collections",
    "subText": "Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens."
};

const Explore_art = () => {
    const [showProducts, setshowProducts] = useState(productList);

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
                <div className="container-fluid axis-padding">

                    <div className="section-wrapper">
                        <div className='row justify-content-center asix-tab-row'>
                            <div className='col-lg-8'>
                                <ul className='nav asix-nav-tab'>
                                    <li className='asix-tab-item'>
                                        <Link href="/explore" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Trending
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item asix-tab-active'>
                                        <Link href="/explore_art" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Arts
                                        </Link>
                                    </li>
                                    <li className='asix-tab-item '>
                                        <Link href="/explore_music" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">
                                            Music
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="explore-wrapper g-4 explore-filter">
                                    {
                                        showProducts.map((item) => (
                                            <ProductSingleExplorer data={item} style={{ marginRight: '15px', marginBottom: '15px' }} key={item.id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore_art;