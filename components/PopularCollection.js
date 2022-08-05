import CollectionSingle from "./common/Collection";
import PopularList from '../data/Collection/Popular.json';
import Link from 'next/link';

var GetPopularList = PopularList.slice(0,3);


const PopularCollection = () => {

    return(
        <section className="collection-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header">
                <h3 className="header-title">Popular Collection</h3>
                <div className="header-content">

                    <Link href="/collection">
                    <a
                        className="default-btn style-2 small-btn move-right"><span>View All
                            <i className="icofont-circled-right"></i></span></a> 
                    </Link>
                    </div>
            </div>
            <div className="section-wrapper">
                <div className="collection-wrapper">
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
    )
}

export default PopularCollection