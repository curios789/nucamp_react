import CampsiteCard from "./CampsiteCard";
import {Row, Col, Container} from 'reactstrap';
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
    return (
        <Container>
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                )
            })}
        </Row>
        </Container>
    )
}
export default CampsitesList;