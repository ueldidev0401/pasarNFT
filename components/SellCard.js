import SellCardList from "../data/Other/SellCard.json";

var GetSellCardList = SellCardList

const SellCard = () => {
    return (
        <div className="section-sell-card">
            <section className="process-section padding-bottom">
                <div className="container-fluid asix-padding">
                    <div className="section-header">
                        <div className="header-title">
                            <h3>Get Started with Selling NFT on Pasar</h3>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="nft-sell-wrapper">
                            <div className="row justify-content-center g-4">
                                {
                                    GetSellCardList.map((item) => (
                                        <div className="col-md-4" key={item.id}>
                                            <div className="nft-item style-3">
                                                <div className="nft-inner text-center">
                                                    <div className="nft-thumb">
                                                        <img src={`${item.image}`} alt="nft-img" />
                                                    </div>
                                                    <div className="nft-content">
                                                        <div className="author-details">
                                                            <h5>{`${item.title}`}</h5>
                                                            <p className="asix-normal-text">{`${item.text}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default SellCard;