import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const PageHeader = ({ text, breadcrumb = true }) => {
    return (
        <section className="page-header-section style-1">
            <div className="container-fluid asix-padding">
                <Row>
                    <Col sm={12} md={6}>
                        <div className="page-header-content">
                            <div className="page-header-inner">
                                <div className="page-title">
                                    <h2 className="page-header-heading arrange-left">{`${text.heading}`} </h2>
                                    <p className="page-header-subtext arrange-left">{`${text.subText}`}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}></Col>
                </Row> 
            </div>
        </section>
    )
}

export default PageHeader;