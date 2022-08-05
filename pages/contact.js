import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import GoogleMap from '../components/GoogleMap';
import PageHeader from '../components/PageHaeder';



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Contact Us"
};

const Policy = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <div className="contact-section">
            <div className="contact-top padding-top padding-bottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="contac-bottom">
                    <div className="row justify-content-center g-0">
                        <div className="col-12">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </div>
    )
}

export default Policy;