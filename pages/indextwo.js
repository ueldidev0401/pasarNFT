import Head from 'next/head';
import BannerTwo from '../components/BannerTwo';
import LiveAuction from '../components/LiveAuction';
import TopCollectors from '../components/TopCollectors';
import PopularCollection from '../components/PopularCollection';
import LatestNews from '../components/LatestNews';

const HomeTwo = () => {
  return (
    <div>
      <BannerTwo />
      <PopularCollection />
      <LiveAuction />
      <TopCollectors />
      <LatestNews />
    </div>
  )
}

export default HomeTwo
