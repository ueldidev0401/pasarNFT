import CategoryList from "../data/Category/Category.json";
import Link from 'next/link';

var CategoryGetList = CategoryList;

const Category = () => {
    return (
        <div>
            <section className="catergory-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h3 className="header-title">Browse By Catergory</h3>
                        <div className="header-content">
                            <Link href="/exploretwo">
                                <a
                                    className="default-btn style-2 small-btn move-right"><span>View All
                                        <i className="icofont-circled-right"></i></span>
                                </a>
                            </Link>

                        </div>
                    </div>
                    <div className="category-wrapper">
                        <div className="row row-cols-2 row-cols-md-4 row-cols-xl-auto g-3">
                            {
                                CategoryGetList.map((item) => (
                                    <div className="col" key={item.id}>
                                        <div className="cat-item">
                                            <Link href="/category">
                                                <div className="cat-inner">
                                                    <div className="cat-thumb">
                                                        <img src={`${item.image}`} alt="Category Image" />
                                                    </div>
                                                    <div className="cat-content">
                                                        <h6><a>{`${item.name}`}</a></h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
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

export default Category