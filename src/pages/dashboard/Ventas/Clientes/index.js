// @flow
import { Row, Col } from 'react-bootstrap';
// import React, { useState,useEffect } from 'react';

// components
import PageTitle from '../../../../components/PageTitle';
import ComponentClientes from './ComponentClientes';
// import { APICore } from '../../../../helpers/api/apiCore';
// const api = new APICore();

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
                    <ComponentClientes />
                </Col>
            </Row>  
        </>
    );
};

export default Clientes;