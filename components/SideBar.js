import Arcive from "./Archive";
import PopularPost from "./common/PopularPost";
import Tags from "./common/Tags";

const Categories = [
    {
        "id":1,
        "name":"Envato",
        "posts":"06",
    },{
        "id":2,
        "name":"HTML template",
        "posts":"11"
    },{
        "id":3,
        "name":"Envato",
        "posts":"07"
    },{
        "id":4,
        "name":"Example",
        "posts":"09"
    },{
        "id":5,
        "name":"PSD template",
        "posts":"20"

    },{
        "id":6,
        "name":"Wordpress",
        "posts":"50"

    },{
        "id":7,
        "name":"Joomla",
        "posts":"25"
        
    },{
        "id":8,
        "name":"PPT Temp",
        "posts":"93"
        
    }
];

const PopularPostList = [
    {
        "id":1,
        "image":"assets/images/blog/01.jpg",
        "postDate":"July 23,2022",
        "title":"Poor People’s Campaign Our Resources"
    },
    {
        "id":2,
        "image":"assets/images/blog/02.jpg",
        "postDate":"July 23,2022",
        "title":"Boosting Social For NGO And Charities"
    },
    {
        "id":3,
        "image":"assets/images/blog/03.jpg",
        "postDate":"July 23,2022",
        "title":"Poor People's Campaign Our Resources"
    },
];

const SideBar = () => {
    return(
        <aside>
            <div className="profile-widget search-widget">
                <div className="widget-inner">
                    <div className="widget-title">
                        <h5>Search Post</h5>
                    </div>
                    <div className="widget-content">
                        <p>Search from the newest post collections</p>
                        <div className="form-floating nft-search-input">
                            <input type="text" className="form-control" id="nftSearch"
                                placeholder="Search post" />
                            <label >Search post</label>
                            <button type="button"> <i className="icofont-search-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget widget-category">
                <div className="widget-header">
                    <h5 className="title">Post Category</h5>
                </div>
                <ul className="widget-wrapper">
                    {
                        Categories.map((item) => (
                            <li key={item.id}>
                                <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                            className="icofont-double-right"></i>{`${item.name}`}</span><span>{`${item.posts}`}</span></a>
                            </li>
                            
                        ))
                    }
                    
                    
                </ul>
            </div>

            <div className="widget widget-post">
                <div className="widget-header">
                    <h5 className="title">Most Popular Post</h5>
                </div>
                <ul className="widget-wrapper">
                    {
                        PopularPostList.map((item) => (
                            <PopularPost key={item.id} item={item} />
                        ))
                    }
                    
                    
                </ul>
            </div>

            <div className="widget widget-archive">
                <div className="widget-header">
                    <h5 className="title">Our Archives</h5>
                </div>
                <Arcive />
            </div>

            <div className="widget widget-tags">
                <div className="widget-header">
                    <h5 className="title">Our Popular Tags</h5>
                </div>
                <Tags />
            </div>
        </aside>
    )
}

export default SideBar;