import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '../public/assets/css/icofont.min.css';
import '../styles/globals.css';
import '../styles/custom.css';
import $ from 'jquery';
// import '../public/assets/js/functions.js';

import Header from '../components/Header'
import Footer from '../components/Footer'

import { wrapper } from "../store";
import TopWrap from '../components/TopWrap';
// import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  return ( 
      <TopWrap> 
        <Head>
          <title>Pasar-NFT Marketplace</title>
          <meta name="description" content="Pasar-NFT Marketplace is a full-fledged NFT or Digital assets marketplace. It is suitable for selling NFTs, or non-fungible tokens, Digital Arts, Digital Music & All types of Digital Assets. You can create, sell & collect NFT’s or digital assets through this website." />
          <link rel="icon" type="image/png" href="assets/images/logo/favor.png" />
        </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </TopWrap> 
  )
}

// export default MyApp
export default wrapper.withRedux(MyApp)
