
//Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";

export function About () {
    return (
        <Container fluid className="pt-5 pl-5 pb-5">
            <Row>
                <Col md={8} className="pr-4">
                    <h2 className="mb-5">ABOUT COMPANY PAGE</h2>

                    <p className="lead mb-4">Tootsie roll sweet brownie caramels tart. Wafer bonbon jelly beans gummies cake. Gingerbread halvah jelly beans toffee cake. Gingerbread tiramisu cake lemon drops I love carrot cake candy biscuit.</p>

                    <p className="text-muted">Apple pie jelly-o jelly I love bear claw sugar plum I love bonbon fruitcake. Pie candy I love biscuit. Bear claw cheesecake I love toffee gummies cookie. Bonbon muffin jelly biscuit powder I love. Cookie sweet roll toffee. Powder I love carrot cake cheesecake. Gummi bears I love tart I love croissant brownie lollipop candy canes ice cream. Jelly halvah I love. Croissant marshmallow tootsie roll dessert jelly-o jelly-o gingerbread dessert.</p>

                    <Button className="mt-4" variant="outline-primary" size="lg">Get in Touch</Button>
                </Col>
                <Col md={4} className="text-center">
                    <Image src="img/icons/signal.svg" className="col-6 col-md-8 mt-5 pb-md-0"/>
                </Col>
            </Row>
        </Container>
    );
}