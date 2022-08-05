import Products from '../data/Product/Trending.json';
import ProductSingle from "./common/ProductSingle";

var productList = Products;

const TrendingNow = () => {
    return(
        <div>
            <section className="artwork-section">
            <div className="container-fluid asix-padding">
                <div className="section-header">
                    <h3 className="header-title">Trending</h3> 
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center g-4">
                        {
                            productList.map((item) => (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-9" key={item.id}>
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

export default TrendingNow;