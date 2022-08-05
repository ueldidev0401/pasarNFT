import PageHeader from '../components/PageHaeder';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import SideBar from "../components/SideBar";
import Link from 'next/link';

SwiperCore.use([Autoplay]);



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Blog Page"
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
    "image":"assets/images/blog/01.gif",
    "images":[
        {
            "id":7,
            "image":"assets/images/blog/03.jpg"
        },
        {
            "id":8,
            "image":"assets/images/blog/02.jpg"
        },
        {
            "id":9,
            "image":"assets/images/blog/01.gif"
        }
    ]
    },
    {
    "id":2,
    "type":"video",
    "link":"https://www.youtube-nocookie.com/embed/eEzD-Y97ges?controls=0",
    "title":"Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
    "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
    "postDate":"March 24, 2022",
    "postBy":"Admin",
    "like":"12",
    "comments":"24",
    "images":[
            {
                "id":4,
                "image":"assets/images/blog/03.jpg"
            },
            {
                "id":5,
                "image":"assets/images/blog/02.jpg"
            },
            {
                "id":6,
                "image":"assets/images/blog/01.gif"
            }
        ]
    },
    {
        "id":3,
        "type":"post",
        "title":"Uompe Qrear High Ecent Nche Without Some Prin Uomp Without Some Qreari",
        "content":"Rapidious qntegrate distrbuted supply chains throuih marke position bestn practces chain marke positonn bestin practcer ieractvel fashon and sound qources forin iteractve fashion bestin practce ieractve and sound qources for.",
        "postDate":"March 24, 2022",
        "postBy":"Admin",
        "like":"12",
        "comments":"24",
        "image":"assets/images/blog/01.gif",
        "images":[
            {
                "id":7,
                "image":"assets/images/blog/03.jpg"
            },
            {
                "id":8,
                "image":"assets/images/blog/02.jpg"
            },
            {
                "id":9,
                "image":"assets/images/blog/01.gif"
            }
        ]
        }
];

const Blog = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="blog-section padding-top padding-bottom">
        <div className="container">
            <div className="main-blog">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="blog-wrapper">

                        {
                            BlogPosts.map((item) => {
                            
                            if(item.type == "post") {
                                return (
                                    <div className="post-item" key={item.id}>
                                        <div className="post-item-inner">
                                            <div className="post-thumb">
                                                <Link href="/blogsingle">
                                                <a><img src={`${item.image}`} alt="blog" /></a>
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <span className="meta">By &nbsp;
                                                <Link href="/author">
                                                <a> {`${item.postBy}`}</a>
                                                </Link>
                                                
                                                 {`${item.postDate}`}</span>
                                                <h3>
                                                <Link href="/blogsingle">
                                                    <a>{`${item.title}`}</a>
                                                </Link>
                                                </h3>
                                                <p>{`${item.content}`}</p>
                                            </div>
                                            <div className="blog-footer">
                                                <Link href="/blogsingle">
                                                <a className="viewall">Read More <i
                                                        className="icofont-double-right"></i></a>
                                                        </Link>
                                                <div className="right">
                                                    <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> {`${item.like}`} <span
                                                            className="d-none d-sm-inline-block">Like</span> </a>
                                                    <a href="#" className="blog-comment"><i className="icofont-comment"></i> {`${item.comments}`}
                                                        <span className="d-none d-sm-inline-block">Comments</span> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(item.type == "video"){
                                return (
                                <div className="post-item video-post" key={item.id}>
                                    <div className="post-item-inner">
                                        <div className="post-thumb">
                                            <div className="ratio ratio-16x9">
                                                <iframe loading="lazy"
                                                    src={`${item.link}`}
                                                    ></iframe>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                                <span className="meta">By &nbsp;
                                                <Link href="/author">
                                                <a> {`${item.postBy}`}</a>
                                                </Link>
                                                
                                                 {`${item.postDate}`}</span>
                                                <h3>
                                                <Link href="/blogsingle">
                                                    <a>{`${item.title}`}</a>
                                                </Link>
                                                </h3>
                                                <p>{`${item.content}`}</p>
                                            </div>
                                            <div className="blog-footer">
                                                <Link href="/blogsingle">
                                                <a className="viewall">Read More <i
                                                        className="icofont-double-right"></i></a>
                                                        </Link>
                                                <div className="right">
                                                    <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> {`${item.like}`} <span
                                                            className="d-none d-sm-inline-block">Like</span> </a>
                                                    <a href="#" className="blog-comment"><i className="icofont-comment"></i> {`${item.comments}`}
                                                        <span className="d-none d-sm-inline-block">Comments</span> </a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                )
                            }
                            
                        })
                        }

                            
                            
                            
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
                    <div className="col-lg-4 col-12">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Blog;