import { Container, Col, Nav, Modal, Row, Card } from "react-bootstrap";
import { useState } from "react";

function WorkModal(){
    const [showHome, setShowHome] = useState(false);

    const handleShow = () => setShowHome(true);
    const handleHide = () => setShowHome(false);

    return(
        <>
            <Nav.Link style={{color:"#E9A6A6"}} onClick={handleShow}>Work</Nav.Link>
            <Modal size = "xl" centered show={showHome} onHide = {handleHide}>
            <Modal.Header className="App-modal-header" closeButton closeVariant="white">
                <Modal.Title className="Super">Some of my Work</Modal.Title>
            </Modal.Header>
            <Modal.Body className="App-modal">
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                        <Card border="dark" className="Upper-card hvr-float">
                            <Card.Img variant="top" src="Storage_Company.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>Storage CRM</Card.Title>
                                    <Card.Subtitle>(Express, SQL, MySQL2, Sequelize)</Card.Subtitle>
                                    <Card.Text>A demo CRM for a theoretical storage company</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/Capricious150/Storage-Company-CRM" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://obscure-fortress-36199.herokuapp.com/" target="_blank" rel="noreferrer">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6}>
                        <Card border="dark" className="Upper-card hvr-float">
                            <Card.Img variant="top" src="PokeMon_TCG.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>Pokemon Card Finder</Card.Title>
                                    <Card.Subtitle>(3rd Party APIs)</Card.Subtitle>
                                    <Card.Text>Application for searching for Pokemon Trading Card data</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/eeoerkeedu/Pokemon_TCG_Finder" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://eeoerkeedu.github.io/Pokemon_TCG_Finder/" target="_blank" rel="noreferrer">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark" className="hvr-grow">
                            <Card.Img variant="top" src="Social_API.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>Demo Social Media API</Card.Title>
                                    <Card.Subtitle>(MongoDB, Mongoose)</Card.Subtitle>
                                    <Card.Text>Demo API for Twitter-like Social Media Company</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/Capricious150/Demo-API-Social-Media" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://drive.google.com/file/d/1uhKEytWpQxz2xpxSKIvQWu2XcKexGaWi/view" target="_blank" rel="noreferrer">Demo Video</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark" className="hvr-grow">
                            <Card.Img variant="top" src="Employee_Tracker.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>Demo E-Commerce API</Card.Title>
                                    <Card.Subtitle>(SQL, MySQL2, Sequelize)</Card.Subtitle>
                                    <Card.Text>Demo API for an Employee Management system</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/Capricious150/Backend-E-Commerce-Demo-App" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://drive.google.com/file/d/1NLMM2sPU-J571YEKmVEauYaWN2We3-WT/view" target="_blank" rel="noreferrer">Demo Video</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark" className="hvr-grow">
                            <Card.Img variant="top" src="This_Portfolio.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>This Portfolio</Card.Title>
                                    <Card.Subtitle>(React)</Card.Subtitle>
                                    <Card.Text>This portfolio! Written in React, with React-BootStrap</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/Capricious150/Portfolio-in-React" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://capricious150.github.io/Portfolio-in-React/" target="_blank" rel="noreferrer">Deployed</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                        <Card border="dark" className="hvr-grow">
                            <Card.Img variant="top" src="Day_Planner2.png" />
                                <Card.Body className="App-modal-header">
                                    <Card.Title>Day Planner</Card.Title>
                                    <Card.Subtitle>(JQuery)</Card.Subtitle>
                                    <Card.Text>A simple day planner which uses local storage and moment.js</Card.Text>
                                    <Card.Link className="App-link" href="https://github.com/Capricious150/Day-Planner" target="_blank" rel="noreferrer">Repo</Card.Link>
                                    <Card.Link className="App-link" href="https://capricious150.github.io/Day-Planner/" target="_blank" rel="noreferrer">Deployed</Card.Link>
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