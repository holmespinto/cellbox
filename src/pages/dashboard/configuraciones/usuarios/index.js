import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentUsuarios from './ComponentUsuarios';
/* status column render */

const Usuarios = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Usuarios', path: '/dashboard/configuraciones/usuarios', active: true },
                ]}
                title={'Configuración de usuarios'}
            />
            <Row>
                <Col lg={12}>
                    <ComponentUsuarios />
                </Col>
            </Row>
        </>
    );
};

export default Usuarios;
