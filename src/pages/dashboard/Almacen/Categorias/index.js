
import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentCategorias from './ComponentCategorias';
/* status column render */
 


const Categorias = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Categorias', path: '/dashboard/almacen/categorias', active: true },
                ]}
                title={''}
            />
            <Row>
                <Col lg={12}>
                <ComponentCategorias/>
                </Col>
            </Row>
       </>
    );
};

export default Categorias;
