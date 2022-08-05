import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"NFT Ranking"
};

const RankedUser =[
    {
        "id":1,
        "userName":"Meoa Cat",
        "image":"assets/images/seller/collector-2.gif",
        "Volume":"22626610.102",
        "day":"+2518181",
        "sevenDay":"-45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7",
        "increment":"19.7",
    },
    {
        "id":2,
        "userName":"rasselmrh",
        "image":"assets/images/seller/collector-4.gif",
        "Volume":"626610.02",
        "day":"+2518181",
        "sevenDay":"+45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },
    {
        "id":3,
        "userName":"technonazmul",
        "image":"assets/images/seller/collector-10.png",
        "Volume":"22600.102",
        "day":"+2518181",
        "sevenDay":"+45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":4,
        "userName":"Rotboat",
        "image":"assets/images/seller/collector-2.png",
        "Volume":"6610.102",
        "day":"+2518181",
        "sevenDay":"+45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":5,
        "userName":"Coffin Boxx",
        "image":"assets/images/seller/collector-1.gif",
        "Volume":"15541.22",
        "day":"+2518181",
        "sevenDay":"+45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":6,
        "userName":"elixir treaser",
        "image":"assets/images/seller/collector-3.png",
        "Volume":"14541.22",
        "day":"+25181",
        "sevenDay":"+45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":7,
        "userName":"Nakashika ",
        "image":"assets/images/seller/collector-3.gif",
        "Volume":"13541.22",
        "day":"+2518",
        "sevenDay":"-45151",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":8,
        "userName":"maxcot @r",
        "image":"assets/images/seller/collector-4.png",
        "Volume":"12541.22",
        "day":"-2518",
        "sevenDay":"+4515",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":9,
        "userName":"Meoa Cat",
        "image":"assets/images/seller/collector-5.png",
        "Volume":"11540.22",
        "day":"+2511",
        "sevenDay":"-4515",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },{
        "id":10,
        "userName":"Space XXX",
        "image":"assets/images/seller/collector-6.png",
        "Volume":"10541.22",
        "day":"+251",
        "sevenDay":"+451",
        "averagePrice":"15.01",
        "owner":"11.5",
        "assets":"19.7"
    },
];

const Rank = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="ranking-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header">
                <div className="nft-filter d-flex flex-wrap align-items-center justify-content-center  gap-15">
                    <h3>Ranking in Anftiz</h3>
                </div>
                <div className="nft-search">
                    <div className="form-floating nft-search-input">
                        <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT" />
                        <label>Search NFT</label>
                        <button type="button"> <i className="icofont-search-1"></i></button>
                    </div>
                </div>
            </div>
            <div className="ranking-wrapper table-responsive">
                <table className="table table-hover rank-table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Collection</th>
                            <th scope="col">Volume</th>
                            <th scope="col">24h </th>
                            <th scope="col">7d </th>
                            <th scope="col">Average Price</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Assets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RankedUser.map((item, i=1) =>(
                                <tr key={item.id}>
                                    <th scope="row" className="rank-sl">{i+1}</th>
                                    <td className="rank-collection">
                                        <div className="rank-col-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-col-thumb">
                                                <a href="#">
                                                    <img className="rounded-circle" src={`${item.image}`}
                                                        alt="Collection Image" />
                                                </a>

                                            </div>
                                            <div className="rank-col-content">
                                                <a href="#">{`${item.userName}`}</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="rank-vol">
                                        <div className="rank-vol-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-vol-thumb">
                                                <img className="rounded-circle" src="assets/images/currency/currency-3.png"
                                                    alt="Collection Image" />

                                            </div>
                                            <div className="rank-vol-content">
                                                {`${item.Volume}`}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={parseInt(item.day) < 0? 'rank-hour text-danger':'rank-hour text-success'}>{`${item.day}`}</td>
                                    <td className={parseInt(item.sevenDay) < 0? 'rank-day text-danger':'rank-day text-success'} >{`${item.sevenDay}`}</td>
                                    <td className="rank-price">
                                        <div className="rank-vol-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-vol-thumb">
                                                <img className="rounded-circle" src="assets/images/currency/currency-3.png"
                                                    alt="Collection Image" />

                                            </div>
                                            <div className="rank-vol-content">
                                            {`${item.averagePrice}`}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="rank-owner">{`${item.owner}`}k</td>
                                    <td className="rank-assets">{`${item.assets}`}k</td>
                                </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Rank;