import PageHeader from '../components/PageHaeder';
import PopularList from '../data/Collection/Popular.json';
import CollectionSingle from '../components/common/Collection';

var GetPopularList = PopularList;



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"All NFT Collection"
};

const Collection = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-header">
                    <h3 className="header-title">All Collection</h3>
                </div>
                <div className="section-wrapper">
                    <div className="collection-wrapper collection-loadmore">
                        <div className="row justify-content-center g-4">
                           
                        {
                            GetPopularList.map((item) => (
                                <CollectionSingle item={item} key={item.id} />
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

export default Collection;