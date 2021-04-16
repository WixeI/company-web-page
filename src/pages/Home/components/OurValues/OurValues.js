//Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";

export function OurValues () {
    return(
        <Container fluid className="pt-5 pl-5 pb-5 bg-light">
            <Row>
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Image src="img/icons/globe.svg" className="col-6 col-md-8 pb-5 pb-md-0" />
                </Col>
                <Col md={8} className="pl-4">
                    <h2 className="mb-5">OUR VALUES</h2>

                    <p className="lead mb-4"><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <p className="text-muted"><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </Container>
    );
}