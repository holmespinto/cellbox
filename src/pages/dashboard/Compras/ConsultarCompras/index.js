// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const ConsultarCompras = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Consultar Compras', path: '/dashboard/compras/consultarcompras', active: true },
                ]}
                title={'Consultar Compras'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Consultar Compra</h4>
                </Col>
            </Row>
       </>
    );
};

export default ConsultarCompras;