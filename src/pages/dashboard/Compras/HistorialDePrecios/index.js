// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const HistorialDePrecios = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Historial De Precios', path: '/dashboard/compras/historialdeprecios', active: true },
                ]}
                title={'Historial De Precios'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Historial De Precios</h4>
                </Col>
            </Row>
       </>
    );
};

export default HistorialDePrecios;