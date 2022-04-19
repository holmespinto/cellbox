// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const Clientes = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Clientes', path: '/dashboard/ventas/clientes', active: true },
                ]}
                title={'Clientes'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Cliente</h4>
                </Col>
            </Row>
       </>
    );
};

export default Clientes;