import Link from 'next/link';

const Connect_wallet = () => {
    return (
        <section className="wallet-section padding-top padding-bottom">
            <div className="container">
                <div className="wallet-inner">
                    <div className="wallet-title text-center">
                        <h3 className="mb-3">Select NFT Network</h3>
                        <p className="m-auto mb-5 subtitle">Only BSC and ETH network are supported now</p>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-6 col-md-6'>
                                    <div className="nav-link wallet-tab active" >
                                        <img className='wallet-img' src="assets/images/wallet/metamask.svg" alt="Metamask" />
                                        <span>Metamask</span>
                                    </div>
                                </div>
                                <div className='col-6 col-md-6'>
                                    <div className="nav-link wallet-tab"  >
                                        <img className='wallet-img' src="assets/images/wallet/walletconnect.svg" alt="WalletConnect" />
                                        <span>Walletconnect</span>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>

                    {/*                     
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-wallet-1" role="tabpanel"
                            aria-labelledby="wallet-tab-1">
                            <div className="wallet-content">
                                <div className="wallet-img">
                                    <img src="assets/images/wallet/metamask.svg" alt="Wallet Name" />
                                </div>
                                <div className="wallet-desc">
                                    <h5>Connect Your MetaMask Wallet</h5>
                                    <a href="#" className="default-btn small-btn move-right"><span>Sign In</span> </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Metamask
                                        wallet</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-wallet-2" role="tabpanel" aria-labelledby="wallet-tab-2">
                            <div className="wallet-content">
                                <div className="wallet-img">
                                    <img src="assets/images/wallet/binance.svg" alt="Wallet Name" />
                                </div>
                                <div className="wallet-desc">
                                    <h5>Connect Your Binance Wallet</h5>
                                    <a href="#" className="default-btn small-btn move-right"> <span>Sign In</span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Binance
                                        wallet</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-wallet-3" role="tabpanel" aria-labelledby="wallet-tab-3">
                            <div className="wallet-content">
                                <div className="wallet-img">
                                    <img src="assets/images/wallet/formatic.svg" alt="Wallet Name" />
                                </div>
                                <div className="wallet-desc">
                                    <h5>Connect Your Formatic Wallet</h5>
                                    <a href="#" className="default-btn small-btn move-right"><span>Sign In</span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Formatic
                                        wallet</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-wallet-4" role="tabpanel" aria-labelledby="wallet-tab-4">
                            <div className="wallet-content">
                                <div className="wallet-img">
                                    <img src="assets/images/wallet/walletconnect.svg" alt="Wallet Name" />
                                </div>
                                <div className="wallet-desc">
                                    <h5>Connect Your Walletconnect Wallet</h5>
                                    <a href="#" className="default-btn small-btn move-right"> <span>Sign In</span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use WalletConnect
                                        wallet</a>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <p className="mt-5 mb-0 wallet-notice"><span className="me-1 theme-color"><i
                        className="icofont-bulb-alt"></i></span> You can use any type of crypto wallet if you wish. The
                        above wallets are shown only for demo purpose.</p> */}


                </div>
            </div>
        </section>
    )
}

export default Connect_wallet;