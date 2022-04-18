// @flow
import { Row, Col} from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const AdministrarCaja = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Administrar Caja', path: '/dashboard/caja/administrarcaja', active: true },
                ]}
                title={'Administrar Caja'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Administrar Caja</h4>
                </Col>
            </Row>
       </>
    );
};

export default AdministrarCaja;