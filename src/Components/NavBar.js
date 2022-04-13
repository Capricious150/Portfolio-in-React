import { Container, Row, Nav } from 'react-bootstrap';
import HomeModal from './HomeModal';
import ContactModal from './ContactModal';
import WorkModal from './WorkModal';
import ResumeModal from './ResumeModal';

function NavBar(){

    return (
        <Container fluid>
            <Row>
                <Nav>
                    <Nav.Item>
                        <HomeModal />
                        <WorkModal />
                        <ResumeModal />
                        <ContactModal />
                    </Nav.Item>
                </Nav>
            </Row>
        </Container>
    )
};

export default NavBar