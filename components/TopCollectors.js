import Collector from './common/Collector';
import User from '../data/User/Users.json';
import Link from 'next/link';

var TopCollector = User.slice(0, 9);

const TopCollectors = () => {

    return (
        <div>
            <section className="seller-section pb-100">
                <div className="container-fluid asix-padding">
                    <div className="section-header">
                        <h3 className="header-title">Top Collectors</h3> 
                        <div className="header-content"> 
                            <Link href="/exploretwo">
                                <a className="default-btn  asix-btn small-btn move-right">
                                    <span>View All</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="seller-wrapper">
                            <div className="row g-3">
                                {
                                    TopCollector.map((item, i = 1) => (
                                        <Collector key={item.id} data={item} count={i} />

                                    ))
                                }
                            </div>
                            {/* <div className="text-center mt-5">
                                <Link href="/rank">
                                    <a className="default-btn move-right"><span>Go To Rank</span></a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopCollectors;