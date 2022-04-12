import { useState } from "react";
import { Modal, Nav } from "react-bootstrap"

function ContactModal(){
    const [showHome, setShowHome] = useState(false);

    const handleShow = () => setShowHome(true);
    const handleHide = () => setShowHome(false);

    return (
        <>
            <Nav.Link className="App-link" onClick={handleShow}>Contact</Nav.Link>
            <Modal className="App-modal-header" size = "lg" centered show={showHome} onHide = {handleHide}>

            <Modal.Body className="App-modal">
                <br></br>
                <h4 className="App">Thanks so much for visiting my portfolio!</h4>
                <br></br>
                <p className="App">If you'd like to get in touch, you can <a className="App-link" href="mailto:austinandrews89@gmail.com">Email me</a></p>
                <p className="App">If you want to learn more about me, you can <a className="App-link" href="./assets/pdf/AustinAndrews-Resume.pdf" target="_blank">View my Resume (PDF)</a> or <a className="App-link" href="https://github.com/Capricious150" target="_blank" >GitHub</a></p>
                <p className="App">Or even my <a className="App-link" href="https://linkedin.com/in/austin-andrews-3222a7b7/" target="_blank">LinkedIn</a>!</p>

            </Modal.Body>
            </Modal>
        </>
    )
}

export default ContactModal