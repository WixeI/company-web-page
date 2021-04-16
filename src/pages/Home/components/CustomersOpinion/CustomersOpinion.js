import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function carouselItem({text, author}) {
    return (
        <Carousel.Item style={{height: "200px"}}>
            <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                <blockquote>
                    <h2 className="text-dark font-weight-light"> {text} </h2>
                    <footer class="blockquote-footer">{author}</footer>
                </blockquote>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export function CustomersOpinion () {
    return (
        <Container className="pt-5 pb-3" fluid>
            <div className="text-center">
                <h2 className="mb-4">What our customers say</h2>
            </div>
            <Carousel 
                prevIcon={<img src="./img/icons/chevron-left.svg" className="w-25"/>} 
                nextIcon={<img src="./img/icons/chevron-right.svg" className="w-25"/>} 
                indicators={false}
            >
                {carouselItem({
                    text: '"One word... WOW!!"',
                    author: "John Doe, Salesman, Rep Inc"
                })}
                {carouselItem({
                    text: '"Could I... BE any more happy with this company?"',
                    author: "Chandler Bing, Actor, FriendsAlot"
                })}
                {carouselItem({
                    text: '"This company is the best. I am so happy with the result!"',
                    author: "Michael Roe, Vice President, Comment Box"
                })}

            </Carousel>
        </Container>
    );
}