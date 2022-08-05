import News from "./common/News";
import NewsList from '../data/News/News.json';
import Link from 'next/link';

var LatestNewsList = NewsList.slice(0, 3);

const LatestNews = () => {
    return (
        <div>
            <section className="blog-section pb-120">
                <div className="container-fluid asix-padding">
                    <div className="section-header">
                        <h3 className="header-title">Latest News</h3>
                        <div className="header-content">
                            <Link href="/blog">
                                <a className="default-btn  asix-btn small-btn move-right">
                                    <span>View All</span>
                                </a>
                            </Link>
                        </div>
                    </div> 
                    <div className="section-wrapper">
                        <div className="blog-wrapper">
                            <div className="row justify-content-center g-4">

                                {
                                    LatestNewsList.map((item) => (
                                        <News data={item} key={item.id} />
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

export default LatestNews