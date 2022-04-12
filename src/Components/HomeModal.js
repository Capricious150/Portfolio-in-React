import { useState } from "react";
import { Container, Col, Nav, Modal, Row, Image } from "react-bootstrap";

function HomeModal () {
    const [showHome, setShowHome] = useState(false);

    const handleShow = () => setShowHome(true);
    const handleHide = () => setShowHome(false);


    return (
        <>
        <Nav.Link className="App-link" onClick={handleShow}>About</Nav.Link>
        <Modal size = "lg" centered show={showHome} onHide = {handleHide}>

            <Modal.Body className="App-modal">
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi!</h1>
                            <br></br>
                            <h3>I'm <span className="Super">Austin</span>,</h3>
                            <h3>A full-stack developer with <span className="Super">10 years experience</span> in tech!</h3>
                            <br></br>
                        </Col>
                        <Col>
                            <Image src = "AustinAProfile.jpg" rounded fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>I am a <span className="Super">Denver-based developer</span> with a lifelong passion for learning and a love of <span id="Super">solving problems in novel, creative ways.</span></p>
                            <p>I began working in tech in 2012 at OpenTable LLC, where <span className="Super">I maintained complex internet networks and firewall structures</span> for customers.
                            Over time my work expanded to include <span className="Super">SQL database administration</span>, which included (but was not limited to) database corruption repair and data-injection.</p>
                            <p>Today I'm dedicated to full-stack development, with a <span className="Super">focus in Backend Dev</span>, with current knowledge in SQL and similar database structures.</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
        </>
    )
}

export default HomeModal;