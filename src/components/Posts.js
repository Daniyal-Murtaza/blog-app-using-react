import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Posts() {
    return (
        <Container>
            <Row className="justify-content-between">
                <Col md={8}><Post1 /></Col>
                <Col className="my-5" md={2}>
                    <Card className='my-5' style={{ width: '100%' }}>
                       
                        <Card.Body>
                            <Card.Title>Recent Posts</Card.Title>
                            <Card.Text>
                                <ul className="list-unstyled">
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Data Structure</a></li>
                                <li><a href="#">Algorithm</a></li>
                                <li><a href="#">Computer</a></li>
                                </ul>

                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}><Post2 /></Col>
                <Col md={8}><Post3 /></Col>
                <Col md={8}><Post4 /></Col>


            </Row>
        </Container>
    )
}

export default Posts;
