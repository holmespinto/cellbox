import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentProveedores from './ComponentProveedores';
/* status column render */

const Proveedores = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Marcas', path: '/dashboard/compras/proveedores', active: true },
                ]}
                title={''}
            />
            <Row>
                <Col lg={12}>
                    <ComponentProveedores />
                </Col>
            </Row>
        </>
    );
};

export default Proveedores;
