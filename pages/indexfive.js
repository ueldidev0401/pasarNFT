import BannerFive from '../components/BannerFive';
import Category from '../components/Category';
import LiveAuction from '../components/LiveAuction';
import TopCollectors from '../components/TopCollectors';
import TrendingNow from '../components/TrendingNow';
import PopularCollection from '../components/PopularCollection';
import SellCard from '../components/SellCard';
import LatestNews from '../components/LatestNews';



const HomeFive = () => {
  return (
    <div>
      <BannerFive />
      <Category />
      <LiveAuction />
      <TopCollectors />
      <TrendingNow />
      <PopularCollection />
      <SellCard />
      <LatestNews />
    </div>
  )
}

export default HomeFive
