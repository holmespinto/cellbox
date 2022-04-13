// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const ConsultarVentas = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Consultar Ventas', path: '/dashboard/ventas/consultarventas', active: true },
                ]}
                title={'Consultar Ventas'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Consultar Ventas</h4>
                </Col>
            </Row>
       </>
    );
};

export default ConsultarVentas;