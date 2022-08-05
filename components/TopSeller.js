import Collector from './common/Collector';
import User from '../data/User/Users.json';
import Link from 'next/link';


var TopSellerList = User.slice(0,9);

const TopSeller = () => {

    return (
        <div>
            <section className="seller-section pb-100">
        <div className="container">
            <div className="section-header">
                <h3 className="header-title">Top Seller</h3>
                <div className="header-content">
                    <ul className="filter-group d-flex flex-wrap align-items-center">
                        <li className="li collection-filter">
                            <div className="select-wrapper arrow-blue" data-icon="&#xea99;">
                                <select className="form-select " aria-label="Collection select">
                                    <option>Collections</option>
                                    <option value="1">Newest</option>
                                    <option value="2">Trending</option>
                                    <option value="3">Most Popular</option>
                                </select>
                            </div>
                        </li>
                        <li className="li day-filter">
                            <div className="select-wrapper arrow-orange" data-icon="&#xea99;">
                                <select className="form-select" aria-label="Day select">
                                    <option>Last 7 Days</option>
                                    <option value="1">Last 15 Day</option>
                                    <option value="2">Last Month</option>
                                    <option value="3">All Time</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="seller-wrapper">
                    <div className="row g-3">
                        {
                            TopSellerList.map((item,i=1) =>(
                                <Collector key={item.id} data={item} count={i} />
                                
                            ))
                        }
                        
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/rank">
                        <a className="default-btn move-right"><span>Go To Rank</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default TopSeller;