import ActivitySingle from '../components/common/ActivitySingle';
import PageHeader from '../components/PageHaeder';



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"All Activities"
};

const Activities = [
    {
        "id":1,
        "title":"Gold digger x",
        "description":"GOLD DIGGER (x Antoni Tudisco) #44/44 was put up for sale for0.0991 ETH",
        "image":"assets/images/activity/01.gif",
        "by":"@rasselmrh",
        "createdAt":"10/07/2022, 10:03 am"
    },
    {
        "id":2,
        "title":"ghost lix xrf",
        "description":"two rare collection purchased for0.001 ETH",
        "image":"assets/images/activity/02.gif",
        "by":"@technonazmul",
        "createdAt":"10/07/2022, 08:23 am"
    },
    {
        "id":3,
        "title":"Trust In meh",
        "description":"The Shopping Cart #54/65 was put up for sale for 0.021 ETH",
        "image":"assets/images/activity/03.gif",
        "by":"@reo2lxsr",
        "createdAt":"10/07/2022, 12:03 am"
    },
    {
        "id":4,
        "title":"Sysytan #0le",
        "description":"A offer of $200.00 was placed for ÜNDERSTANDING (Sean Williams) #1/20",
        "image":"assets/images/activity/04.gif",
        "by":"@reo2lxsr",
        "createdAt":"10/07/2022, 12:03 am"
    }
];

const Filters = [
    {
        "id":1,
        "name":"Listing",
        "icon":"icofont-listine-dots"
    },
    {
        "id":2,
        "name":"Purchases",
        "icon":"icofont-cart"
    },
    {
        "id":3,
        "name":"Sales",
        "icon":"icofont-sale-discount"
    },
    {
        "id":4,
        "name":"Transfers",
        "icon":"icofont-retweet"
    },
    {
        "id":5,
        "name":"Burns",
        "icon":"icofont-fire-burn"
    },
    {
        "id":6,
        "name":"Bids",
        "icon":"icofont-court-hammer"
    },
    {
        "id":7,
        "name":"Likes",
        "icon":"icofont-like"
    },
    {
        "id":8,
        "name":"Following",
        "icon":"icofont-favourite"
    },
    {
        "id":9,
        "name":"Recent",
        "icon":"icofont-history"
    }
];

const Activity = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        
        <section className="activity-section padding-top padding-bottom">
        <div className="container">

            <div className="section-wrapper">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="section-header">
                            <h3>Site Activites</h3>
                            <div className="nft-filter d-flex flex-wrap justify-content-center gap-15">
                                <div className="form-floating">
                                    <select className="form-select" id="sortSelect"
                                        aria-label="Floating label select example">
                                        <option>Newest</option>
                                        <option value="1">Trending</option>
                                        <option value="2">Most Viewed</option>
                                        <option value="3">Less Viewed</option>
                                        <option value="3">Ending Soon</option>
                                        <option value="3">Recently Sold </option>
                                        <option value="3">Recently Created </option>
                                        <option value="3">Recently Viewed </option>
                                        <option value="3">Ending Soon</option>
                                    </select>
                                    <label>Sort By</label>
                                </div>
                            </div>
                        </div>
                        <div className="activity-wrapper activity-loadmore">
                            <div className="row gy-3">
                                {
                                    Activities.map((item) =>(
                                        <div className="col-12" key={item.id}>
                                            <ActivitySingle item={item} />
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <aside className="mt-5 mt-xl-0">
                            <div className="widget widget-tags">
                                <div className="widget-header">
                                    <h5 className="title">Filters By</h5>
                                </div>

                                <ul className="widget-wrapper justify-content-start">
                                    {
                                        Filters.map((item) =>(
                                            <li key={item.id}><a><i className={`${item.icon}`}></i> {`${item.name}`}</a></li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </div>
    </section>
        
        </div>
    )
}

export default Activity;