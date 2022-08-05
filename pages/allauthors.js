import PageHeader from '../components/PageHaeder';
import Users from '../data/User/Authors.json';
import TopSellers from '../components/TopSeller';
import AuthorCard from "../components/common/AuthorCard";

var userList = Users.slice(0,8);

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"All of our Authors"
};

const AllAuthor = () => {

    return (
        <div>
        <PageHeader text={PageHeaderText} />
        
        <section className="seller-section padding-bottom padding-top">
        <div className="container">
            <TopSellers />

            <section className="explore-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header justify-content-between">
                        <div className="header-title">
                            <span><i className="icofont-light-bulb"></i></span>
                            <h3>All Authors</h3>
                        </div>
                        <div className="nft-search">
                            <div className="form-floating nft-search-input">
                                <input type="text" className="form-control" id="nftSearch" placeholder="Search Author" />
                                <label >Search Author</label>
                                <button type="button"> <i className="icofont-search-1"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="explore-wrapper">
                            <div className="row justify-content-center g-4">
                                {
                                    userList.map((item) => (
                                        <AuthorCard item={item} key={item.id} />
                                    ))
                                }
                                
                                
                            </div>
                            

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
        </div>
    )
}

export default AllAuthor;