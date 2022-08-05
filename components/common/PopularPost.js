import Link from 'next/link';

const PopularPost = ({item}) => {
    return (
        <li className="d-flex flex-wrap justify-content-between">
            <div className="post-thumb">
                <Link href="/blogsingle">
                <a><img src={`${item.image}`}
                        alt="post-img" /></a>
                </Link>
            </div>
            <div className="post-content">
                <Link href="/blogsingle">
                <a>
                    <h6>{`${item.title}`}</h6>
                </a>
                </Link>
                <p>{`${item.postDate}`}</p>
            </div>
        </li>
    )
}

export default PopularPost;