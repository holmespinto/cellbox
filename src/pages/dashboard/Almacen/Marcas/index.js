import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentMarcas from './ComponentMarcas';
/* status column render */

const Marcas = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Marcas', path: '/dashboard/almacen/marcas', active: true },
                ]}
                title={''}
            />
            <Row>
                <Col lg={12}>
                    <ComponentMarcas />
                </Col>
            </Row>
        </>
    );
};

export default Marcas;
