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
                        <Col xs={12} lg={6}>
                        <Card border="dark" className="Upper-card">
                            <Card.Img variant="top" src="Storage_Company.png" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Storage CRM</Card.Title>
                                <Card.Subtitle>(Express, SQL, MySQL2, Sequelize)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6}>
                        <Card border="dark" className="Upper-card">
                            <Card.Img variant="top" src="PokeMon_TCG.png" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Pokemon Card Finder</Card.Title>
                                <Card.Subtitle>(3rd Party APIs)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark">
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Demo Social Media API</Card.Title>
                                <Card.Subtitle>(MongoDB, Mongoose)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Demo Video</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark">
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Demo E-Commerce API</Card.Title>
                                <Card.Subtitle>(SQL, MySQL2, Sequelize)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Demo Video</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark">
                            <Card.Img variant="top" src="AustinAProfile.jpg" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Subtitle>(Javascript)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark">
                            <Card.Img variant="top" src="Day_Planner.png" />
                                <Card.Body className="App-modal-header">
                                <Card.Title>Day Planner</Card.Title>
                                <Card.Subtitle>(JQuery)</Card.Subtitle>
                                <Card.Text>HEY LOOK AT ME I'M A CARD PLEASE GIVE ME BETTER CONTENT</Card.Text>
                                <Card.Link href="#">Repo</Card.Link>
                                <Card.Link href="#">Deployed</Card.Link>
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