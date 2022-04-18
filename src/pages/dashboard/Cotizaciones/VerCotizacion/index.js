// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const VerCotizacion = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'VerCotizacion', path: '/dashboard/cotizaciones/vercotizacion', active: true },
                ]}
                title={'Ver Cotizacion'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Ver Cotizacion</h4>
                </Col>
            </Row>
       </>
    );
};

export default VerCotizacion;
