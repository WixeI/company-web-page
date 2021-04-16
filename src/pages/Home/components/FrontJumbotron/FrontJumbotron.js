// import styles from "./FrontJumbotron.module.css"

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

export function FrontJumbotron() {
    return (
        <Jumbotron className={`
            text-center
            bg-primary
            text-light
        `}>
            <h1 className="display-3 mb-3">Company</h1>
            <h4>We specialize in blablabla</h4>
            <Form inline className="
                justify-content-center 
                mt-5
            ">
                <Form.Group controlId="formBasicEmail" className="
                    col-12 
                    justify-content-center
                ">
                    <Form.Control className="col-12 col-md-4 mb-3 mb-md-0" type="email" placeholder="Email Address" />
                    <Button variant="success" type="submit">
                        Subscribe
                    </Button>
                </Form.Group>
            </Form>
        </Jumbotron>
    );
}