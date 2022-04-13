// @flow
import { Row, Col, Card } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const AdministrarCreditos = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Administrar Creditos', path: '/dashboard/ventasalcredito/administrarcreditos', active: true },
                ]}
                title={'Admistrar Creditos'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador De Creditos</h4>
                </Col>
            </Row>
       </>
    );
};

export default AdministrarCreditos;