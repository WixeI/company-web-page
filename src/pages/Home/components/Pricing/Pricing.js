import { Container, Row, Col, Card, Button } from "react-bootstrap";


function pricingCard ({title, benefits, pricing}) {
    return (
        <Card className="text-center" >
            <Card.Header as="h3" className="py-4">{title}</Card.Header>
            <Card.Text >
                <p className="mt-3"><strong>{benefits[0]}</strong> Lorem</p>
                <p className="mt-3"><strong>{benefits[1]}</strong> Ipsum</p>
                <p className="mt-3"><strong>{benefits[2]}</strong> Dolor</p>
                <p className="mt-3"><strong>{benefits[3]}</strong> Sit</p>
                <p className="mt-3"><strong>Endless</strong> Amet</p>
            </Card.Text>
            <Card.Footer>
                <h3>${pricing}</h3>
                <h4>per month</h4>
                <Button variant="primary">Sign Up</Button>
            </Card.Footer>
        </Card>
    );
}

export function Pricing () {
    return (
        <Container fluid>
            <div className="text-center">
                <h2 className="mb-5">PRICING</h2>
                <h4 className="mb-5">Choose a payment plan that works for you</h4>
            </div>
            <Row>
                <Col sm={4}>
                    {pricingCard({
                        title: "Basic",
                        benefits: [20, 15, 5, 2],
                        pricing: 19
                    })}
                </Col>
                <Col sm={4}>
                    {pricingCard({
                        title: "Pro",
                        benefits: [50, 25, 10, 5],
                        pricing: 29
                    })}
                </Col>
                <Col sm={4}>
                    {pricingCard({
                        title: "Premium",
                        benefits: [100, 50, 25, 10],
                        pricing: 49
                    })}
                </Col>
                
            </Row>
        </Container>
    );
}