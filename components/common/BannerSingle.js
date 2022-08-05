const BannerSingle = ({data}) => {
    return (
        <div key={data.id} className="col-md-3">
            <div className="banner_shape__item">
                <img src={`${data.image}`} alt={`${data.alt}`} />
            </div>
        </div>
    )
}

export default BannerSingle