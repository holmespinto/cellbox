// @flow
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';
import ComponentProductos from './ComponentProductos';
import { APICore } from '../../../../helpers/api/apiCore';
const api = new APICore();

const Productos = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Categorias', path: '/dashboard/almacen/productos', active: true },
                ]}
                title={'Productos'}
            />
            <Row>
                <Col lg={12}>
                    <ComponentProductos />
                </Col>
            </Row>
        </>
    );
};

export default Productos;
