
import { Row, Col } from 'react-bootstrap';
// components
import PageTitle from '../../../../components/PageTitle';
import ComponentPerecederos from './ComponentPerecederos';
/* status column render */
 


const Perecederos = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Perecederos', path: '/dashboard/almacen/perecederos', active: true },
                ]}
                title={''}
            />
            <Row>
                <Col lg={12}>
                <ComponentPerecederos/>
                </Col>
            </Row>
       </>
    );
};

export default Perecederos;
