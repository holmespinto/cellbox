// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const RealizarVentas = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Realizar Ventas', path: '/dashboard/ventas/realizarventas', active: true },
                ]}
                title={'Realizar Ventas'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador De Realizar Ventas</h4>
                </Col>
            </Row>
       </>
    );
};

export default RealizarVentas;