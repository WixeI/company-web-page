//Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";

//Variables
const rowStyle = "";

function rowItem ({imgSource, name, text}) {
    return (
        <Col className="text-center mb-4" sm={6} md={4}>
            <Image src={imgSource} className="col-3 col-md-2 mb-3" />
            <h4>{name}</h4>
            <p className="text-muted">{text}</p>
        </Col>
    );
}

export function Services() {
    return (
        <Container fluid className="pt-5 pb-5">
            <div className="text-center">
                <h2 className="mb-4">SERVICES</h2>
                <h4 className="mb-5">What we offer</h4>
            </div>
            <Row className="mt-4 mb-4">
                {rowItem({
                    imgSource: "img/icons/power-standby.svg",
                    name: "POWER",
                    text: "Lorem ipsum dolor sit amet..",
                })}

                {rowItem({
                    imgSource: "img/icons/heart.svg",
                    name: "LOVE",
                    text: "Lorem ipsum dolor sit amet..",
                })}

                {rowItem({
                    imgSource: "img/icons/lock-locked.svg",
                    name: "JOB DONE",
                    text: "Lorem ipsum dolor sit amet..",
                })}

                {rowItem({
                    imgSource: "img/icons/droplet.svg",
                    name: "GREEN",
                    text: "Lorem ipsum dolor sit amet..",
                })}

                {rowItem({
                    imgSource: "img/icons/sun.svg",
                    name: "CERTIFIED",
                    text: "Lorem ipsum dolor sit amet..",
                })}

                {rowItem({
                    imgSource: "img/icons/wrench.svg",
                    name: "HARD WORK",
                    text: "Lorem ipsum dolor sit amet..",
                })}
            </Row>

        </Container>
    );
}