const HelpPageHeader = () =>{
    return(
        <section className="help-search padding-top pb-5">
            <div className="container">
                <div className="help-search-wrapper text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="help-search-content mb-4">
                                <h2>How Can We Help You?</h2>
                            </div>
                            <div className="search-bar input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search our help center"
                                    aria-label="Search our help center" aria-describedby="help-search" />
                                <button className="btn btn-outline-secondary" type="button" id="help-search"><i
                                        className="icofont-search-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default HelpPageHeader;