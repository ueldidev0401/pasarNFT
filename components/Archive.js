const Archives = [
    {
        "id":1,
        "month":"February",
        "year":2020
    },
    {
        "id":2,
        "month":"March",
        "year":2019
    },
    {
        "id":3,
        "month":"April",
        "year":2018
    },
    {
        "id":4,
        "month":"June",
        "year":2017
    },
    {
        "id":5,
        "month":"February",
        "year":2015
    },
    {
        "id":6,
        "month":"January",
        "year":2014
    }
]
const Arcive = () => {
    return(
        <ul className="widget-wrapper">
            {
                Archives.map((item) => (
                    <li key={item.id}>
                        <a className="d-flex flex-wrap justify-content-between"><span><i
                            className="icofont-double-right"></i>{`${item.month}`}</span><span>{`${item.year}`}</span></a>
                    </li>
                ))
            }
            
        </ul>
    )
}

export default Arcive;