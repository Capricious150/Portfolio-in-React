import { Row, Col, Container, Modal, Nav } from "react-bootstrap";
import { useState } from "react";

function ResumeModal(){
    const [showHome, setShowHome] = useState(false);

    const handleShow = () => setShowHome(true);
    const handleHide = () => setShowHome(false);

    return (
        <>
            <Nav.Link style={{color:"#E9A6A6"}} onClick={handleShow}>Resume</Nav.Link>

            <Modal size = "lg" centered show={showHome} onHide = {handleHide}>
                <Modal.Header className="App-modal-header" closeButton closeVariant="white">
                    <Modal.Title className="Super">Skills and Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body className="App-modal">
                    <Container>
                        <Row>
                            <Col>
                                <h5>Core Skills</h5>
                                <ul>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                </ul>
                            </Col>
                            <Col>
                                <h5>Related Skills</h5>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>Apollo</li>
                                    <li>GraphQL</li>
                                    <li>React Router</li>
                                    <li>MySQL2</li>
                                    <li>Sequelize</li>
                                    <li>Mongoose</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <h5>Additional Technologies</h5>
                            <p>Visual Studio, GitHub, Heroku, Salesforce, Atlassian JIRA and Zendesk, GSuite, Microsoft Office, WorkForce, ADP, Slack, Hipchat, Zoom </p>
                            <h5><a className="App-link" href="./AustinAndrews-Resume.pdf" target="_blank" rel="noreferrer">View my Resume (PDF)</a></h5>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ResumeModal