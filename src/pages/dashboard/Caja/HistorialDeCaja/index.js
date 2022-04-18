// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const HistorialDeCaja = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Historial De Caja', path: '/dashboard/caja/historialdecaja', active: true },
                ]}
                title={'Historial De Caja'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador Historial De Caja</h4>
                </Col>
            </Row>
       </>
    );
};

export default HistorialDeCaja;