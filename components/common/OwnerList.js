import Link from 'next/link';

const OwnerList = ({data}) => {
    return (
        <li className="single-author d-flex align-items-center">
            <Link href="/author">
            <a className={`${data.verified?'veryfied':''}`}><img
                src={`${data.image}`}
                alt="author-img" /></a>
            </Link>
            <h6>
            <Link href="/author">
                <a>{`${data.name}`}</a>
            </Link>
            </h6>
        </li>
    )
}

export default OwnerList