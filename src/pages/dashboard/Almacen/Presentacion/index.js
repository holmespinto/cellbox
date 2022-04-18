import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentPresentacion from './ComponentPresentacion';
/* status column render */

const Presentaciones = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Presentacion', path: '/dashboard/presentacion/presentacion', active: true },
                ]}
                title={''}
            />
            <Row>
                <Col lg={12}>
                    <ComponentPresentacion />
                </Col>
            </Row>
        </>
    );
};

export default Presentaciones;
