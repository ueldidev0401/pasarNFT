const TagList = [
    {
        "id":1,
        "keyword":"template"
    },
    {
        "id":2,
        "keyword":"envato"
    },
    {
        "id":3,
        "keyword":"example"
    },
    {
        "id":4,
        "keyword":"newblog"
    },
    {
        "id":5,
        "keyword":"template"
    },
    {
        "id":6,
        "keyword":"music temp"
    },
    {
        "id":7,
        "keyword":"PPT Temp"
    },
    {
        "id":8,
        "keyword":"envato"
    },
    {
        "id":9,
        "keyword":"example"
    }
];
const Tags = () => {
    return (
        <ul className="widget-wrapper">
            {
                TagList.map((item) => (
                    <li key={item.id}><a href="#">{`${item.keyword}`}</a></li>
                ))
            }
            
        </ul>
    )
}

export default Tags;