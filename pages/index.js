
import Banner from '../components/Banner';
import Category from '../components/Category';
import LiveAuction from '../components/LiveAuction';
import TopCollectors from '../components/TopCollectors';
import TrendingNow from '../components/TrendingNow';
import PopularCollection from '../components/PopularCollection';
import SellCard from '../components/SellCard';
import LatestNews from '../components/LatestNews';
import PageHeader from '../components/PageHaeder'; 

const PageHeaderText =
{ 
    "heading":"Discorver, collect and sell extraordinary NFTs",
    "subText":"Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens."
};
const Home = () => {
  return (
    <div> 
      <PageHeader text={PageHeaderText} /> 
      <LiveAuction />
      <TopCollectors />
      <TrendingNow />  
      <SellCard />
      <LatestNews />
    </div>
  )
}

export default Home
