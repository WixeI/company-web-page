import { Container, Image, Col, Row, Card } from "react-bootstrap";

function rowItem ({imgSource, name, text}) {
    return (
        <Col sm={6} md={4}>
            <Card className="text-center mb-4">
                <Card.Img variant="top" src={imgSource} />
                {/* <h5><strong>{name}</strong></h5> */}
                <Card.Title className="mt-3">{name}</Card.Title>
                <Card.Text className="text-muted mb-4">{text}</Card.Text>
            </Card>
        </Col>
    );
}

export function Portfolio() {
    return(
        <Container fluid className="bg-light pt-5 pb-3">
            <div className="text-center">
                <h2 className="mb-5">PORTFOLIO</h2>
                <h4 className="mb-5">What we created</h4>
            </div>
            <Row className="justify-content-center">
                {rowItem({
                    imgSource: "https://source.unsplash.com/random/800x500?sig=1",
                    name: "Paris",
                    text: "Yes, we built Paris"
                })}
                {rowItem({
                    imgSource: "https://source.unsplash.com/random/800x500?sig=2",
                    name: "New York",
                    text: "Yes, we New York"
                })}
                {rowItem({
                    imgSource: "https://source.unsplash.com/random/800x500?sig=3",
                    name: "San Fransokyo",
                    text: "Yes, we built San Fransokyo"
                })}
                
            </Row>
        </Container>
    );
}