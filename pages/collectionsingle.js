import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingle from "../components/common/ProductSingle";

var productList = Products.slice(0,12);

const PageHeaderText =
{
    "linkText":"Home",
    "author":"Nakashika _Chang",
    "authorImg":"assets/images/seller/collector-3.gif",
    "heading":"Holographics Ghost Team"
};

const CollectionSingle = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} breadcrumb={false} />
        
            <section className="collecion-single padding-bottom padding-top">
            <div className="container">
                <div className="section-header">
                    <h3 className="header-title">My Collections</h3>
                    <div className="header-content">
                        <ul className="filter-group d-flex flex-wrap align-items-center">
                            <li className="li collection-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xea99;">
                                    <select className="form-select " aria-label="Collection select">
                                        <option>Collections</option>
                                        <option value="1">Newest</option>
                                        <option value="2">Trending</option>
                                        <option value="3">Most Popular</option>
                                    </select>
                                </div>
                            </li>
                            <li className="li day-filter">
                                <div className="select-wrapper arrow-orange" data-icon="&#xea99;">
                                    <select className="form-select" aria-label="Day select">
                                        <option>Last 7 Days</option>
                                        <option value="1">Last 15 Day</option>
                                        <option value="2">Last Month</option>
                                        <option value="3">All Time</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collection-single-wrapper">
                    <div className="row g-4">
                        
                        {
                            productList.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                <ProductSingle data={item} />
                                </div>
                            ))
                        }
                        
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default CollectionSingle;