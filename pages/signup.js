import PageHeader from '../components/PageHaeder';
import Signup from '../components/Signup'; 
 

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Sign Up Page"
};

const Policy = () => {


    return (
        <div>
        {/* <PageHeader text={PageHeaderText} /> */}
        <div className="login-section padding-top padding-bottom">
            <div className="container">
                <div className="row g-5 asix-margin-zero">                     
                    <div className="col-lg-5 asix-padding-zero">
                        <Signup />
                    </div>
                    <div className="col-lg-7 asix-padding-zero asix-rocket">
                        <div className="account-img">
                            <img src="assets/images/asix/signin/rocket.png" alt="shape-image" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        </div>
    )
}

export default Policy;