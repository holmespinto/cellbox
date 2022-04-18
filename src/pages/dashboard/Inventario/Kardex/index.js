// @flow
import { Row, Col } from 'react-bootstrap';
//import React, { useState } from 'react';
// components
import PageTitle from '../../../../components/PageTitle';


const Kardex = (): React$Element<React$FragmentType> => {
  
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Dashboard' },
                    { label: 'Kardex', path: '/dashboard/inventario/Kardex', active: true },
                ]}
                title={'Kardex'}
            />
            <Row>
                <Col lg={12}>
                <h4 className="page-title">administrador de Kardex</h4>
                </Col>
            </Row>
       </>
    );
};

export default Kardex;