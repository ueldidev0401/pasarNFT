import Products from '../data/Product/Trending.json';
import ProductSingleSaled from "./common/ProductSingleSaled";

var productList = Products;

const CrowdFunding = () => {
    return (
        <div className="container-fluid">
            <div className="section-wrapper">
                <div className="row justify-content-center g-4">
                    {
                        productList.map((item) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-9" key={item.id}>
                                <ProductSingleSaled data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CrowdFunding;