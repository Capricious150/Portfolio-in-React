import { Container, Col, Nav, Modal, Row, Image, Card } from "react-bootstrap";
import { useState } from "react";

function WorkModal(){
    const [showHome, setShowHome] = useState(false);

    const handleShow = () => setShowHome(true);
    const handleHide = () => setShowHome(false);

    return(
        <>
            <Nav.Link className="App-link" onClick={handleShow}>Work</Nav.Link>
            <Modal size = "xl" centered show={showHome} onHide = {handleHide}>

            <Modal.Body className="App-modal">
                <Container>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body>
                                <Card.Title>Project</Card.Title>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
        </>
    )
}

export default WorkModal