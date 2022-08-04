import { Container, Row, Col, Button } from "reactstrap";
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { useState } from "react";
import SubHeader from "../components/SubHeader";

const CampsitesDirectoryPage = () => { 
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return(
        <Container>
        <SubHeader current='Directory'/>
            <Row>
                <Col>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;