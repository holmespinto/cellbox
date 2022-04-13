// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const GenerarCotizacion = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'GenerarCotizacion', path: '/dashboard/cotizaciones/generarcotizacion', active: true },
                ]}
                title={'Generar Cotizacion'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Generar Cotizacion</h4>
                </Col>
            </Row>
       </>
    );
};

export default GenerarCotizacion;
