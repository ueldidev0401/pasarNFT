import Link from "next/link";
import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Create Variation"
};

const CreateVariant = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="variation-section padding-bottom padding-top">
            <div className="container">
                <div className="variation-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="variation-content text-center">
                                <p>Choose Single if you want your collectible to be one of a kind or Multiple if you
                                    want to sell one collectible times</p>
                                <div className="variation-items">
                                    <Link href="/createnft">
                                        <a className="variation-item">
                                            <img src="assets/images/create/01.png" alt="Create Sinle NFT Image" />
                                            <h5 className="mt-4">Single Item</h5>
                                        </a>
                                    </Link> 

                                    <Link href="/createnft">
                                        <a href="" className="variation-item">
                                            <img src="assets/images/create/02.png" alt="Create Sinle NFT Image" />
                                            <h5 className="mt-4">Multiple Item</h5>
                                        </a>
                                    </Link> 
                                    
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default CreateVariant;