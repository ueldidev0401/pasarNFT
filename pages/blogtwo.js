import PageHeader from '../components/PageHaeder';
import SwiperCore, { Autoplay } from 'swiper';
import SideBar from "../components/SideBar";
import BlogItem from '../components/BlogItem';

SwiperCore.use([Autoplay]);



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Blog Right Sidebar"
};

const BlogPosts =
[
    {
    "id":1,
    "type":"post",
    "title":"Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/01.jpg"
    },
    {
    "id":2,
    "type":"slider",
    "title":"Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/02.jpg",
    
    },
    {
    "id":3,
    "type":"video",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/03.jpg",
    
    },
    {
    "id":4,
    "type":"post",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Decentrelize Crypto ...",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/01.gif",
    
    },
    {
    "id":5,
    "type":"post",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Trending NFT 2022",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/04.jpg",
    
    },
    {
    "id":6,
    "type":"post",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Decentrelize Crypto ...",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/05.jpg",
    
    },
    {
    "id":7,
    "type":"post",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Learn More about NFT",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/06.jpg",
    
    },
    {
    "id":8,
    "type":"post",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Learn More about NFT",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "image":"assets/images/nft-item/blog/07.jpg",
    
    }
];

const BlogTwo = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="blog-section padding-top padding-bottom">
            <div className="container">
                <div className="main-blog">
                    <div className="row g-5">
                        <div className="col-xl-8 col-12">
                            <div className="blog-wrapper">
                                <div className="row justify-content-center g-4">
                                    {
                                        BlogPosts.map((item) =>(
                                            <BlogItem item={item} key={item.id} />
                                        ))
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className="paginations">
                                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                                    <li>
                                        <a href="#"><i className="icofont-rounded-double-left"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li className="d-none d-sm-block">
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">...</a>
                                    </li>
                                    <li className="d-none d-sm-block">
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icofont-rounded-double-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-12">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default BlogTwo;