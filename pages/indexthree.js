import BannerThree from '../components/BannerThree';
import Category from '../components/Category';
import LiveAuction from '../components/LiveAuction';
import TopCollectors from '../components/TopCollectors';
import TrendingNow from '../components/TrendingNow';
import LatestNews from '../components/LatestNews';


const HomeThree = () => {
  return (
    <div>
      <BannerThree />
      <Category />
      <LiveAuction />
      <TopCollectors />
      <TrendingNow />
      <LatestNews />
    </div>
  )
}

export default HomeThree
